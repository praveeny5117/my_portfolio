import React from 'react';
import {
  Building2, CheckCircle2, ArrowRight, Stethoscope, UtensilsCrossed, ShieldCheck
} from 'lucide-react';

interface ProjectVisualMockupProps {
  projectId: string;
}

export const ProjectVisualMockup: React.FC<ProjectVisualMockupProps> = ({ projectId }) => {
  // Project 01: Adamsbridge Real Estate Sourcing
  if (projectId === 'real-estate-sourcing') {
    return (
      <div className="w-full h-full min-h-[340px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#00F0FF]/10 rounded-full blur-3xl" />

        {/* Dashboard Top bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#00F0FF]" />
            <span className="font-bold text-white text-xs">Adamsbridge • Real Estate Sourcing</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>MongoDB Query Speed: +50% Boost</span>
          </div>
        </div>

        {/* Live metric cards */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px]">ASSET DEALS</div>
            <div className="text-lg font-bold text-white font-heading">14,290</div>
            <div className="text-[10px] text-cyan-400">+820 active pipeline</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px]">DATA MIGRATION</div>
            <div className="text-lg font-bold text-emerald-400 font-heading">MSSQL ⟶ Mongo</div>
            <div className="text-[10px] text-zinc-400">Zero downtime</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px]">RESPONSE LATENCY</div>
            <div className="text-lg font-bold text-purple-400 font-heading">180ms</div>
            <div className="text-[10px] text-zinc-400">Targeted compound indexes</div>
          </div>
        </div>

        {/* Real-time transaction queue feed */}
        <div className="space-y-2 bg-black/40 p-3 rounded-xl border border-white/5">
          <div className="text-[10px] text-zinc-500 flex items-center justify-between">
            <span>MICROSERVICES DOMAIN ROUTER</span>
            <span>NODE 22+ CLUSTER (PM2)</span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between text-zinc-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Deal #AD-9041 • Commercial Office Underwriting</span>
              </span>
              <span className="text-emerald-400 font-bold">$4.2M CAP 6.8%</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Deal #AD-9040 • Multifamily Portfolio Sourcing</span>
              </span>
              <span className="text-emerald-400 font-bold">$12.5M Verified</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>ANGULAR 18+ • SIGNALS • PRIMENG</span>
          <span className="text-[#00F0FF]">AWS EC2 + S3 DEPLOYED</span>
        </div>
      </div>
    );
  }

  // Project 02: OrderMe Hotel Management Application (Live Order Tracking, Services & Audit Logs)
  if (projectId === 'orderme-application') {
    return (
      <div className="w-full h-full min-h-[340px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        <div className="absolute -top-10 -left-10 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-4 h-4 text-blue-400" />
            <span className="font-bold text-white text-xs">OrderMe • Room 408 (Executive Suite)</span>
          </div>
          <span className="text-[10px] bg-blue-500/10 text-cyan-300 px-2 py-0.5 rounded border border-blue-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
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
            <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-400 text-cyan-300 animate-pulse">
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
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              HOTEL SERVICE AUDIT LOG (IMMUTABLE SHA-256)
            </span>
            <span className="text-emerald-400">VERIFIED</span>
          </div>
          <div className="space-y-1 text-[11px] text-zinc-300">
            <div className="truncate">
              <span className="text-zinc-500">[19:08:45]</span> Food Order: Grilled Atlantic Salmon & Sparkling Wine dispatched by Kitchen
            </div>
            <div className="truncate text-zinc-400">
              <span className="text-zinc-500">[19:09:12]</span> Housekeeping Service: Extra Bath Linens acknowledged by Floor Team #04
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>ANGULAR 18+ • NODE 22+ • WEBSOCKETS</span>
          <span className="text-blue-400">LATENCY: &lt;42ms • 0 LOST TICKETS</span>
        </div>
      </div>
    );
  }

  // Project 03: Healthcare Clinical Records Platform
  return (
    <div className="w-full h-full min-h-[340px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-white text-xs">Healthcare Data Platform • Clinical EHR</span>
        </div>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
          HIPAA & RBAC Enforced
        </span>
      </div>

      {/* Clinical Flow Pipeline */}
      <div className="my-3 space-y-2">
        <div className="text-[10px] text-zinc-500 uppercase">Clinical Workflow Security Pipeline</div>
        <div className="flex items-center justify-between gap-1 p-2 rounded-xl bg-white/[0.03] border border-white/5 text-[10px]">
          <div className="text-center px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
            <div>Patient Triage</div>
            <span className="text-[9px] text-zinc-400">Intake Encrypted</span>
          </div>
          <ArrowRight className="w-3 h-3 text-zinc-600" />
          <div className="text-center px-2 py-1 rounded bg-cyan-500/10 text-cyan-300">
            <div>Doctor Console</div>
            <span className="text-[9px] text-zinc-400">Field Projections</span>
          </div>
          <ArrowRight className="w-3 h-3 text-zinc-600" />
          <div className="text-center px-2 py-1 rounded bg-amber-500/10 text-amber-300">
            <div>Diagnostic Vault</div>
            <span className="text-[9px] text-zinc-400">AWS S3 Signed</span>
          </div>
          <ArrowRight className="w-3 h-3 text-zinc-600" />
          <div className="text-center px-2 py-1 rounded bg-purple-500/10 text-purple-300">
            <div>Audit Trail</div>
            <span className="text-[9px] text-zinc-400">Immutable Log</span>
          </div>
        </div>
      </div>

      {/* Security Status */}
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[10px] text-zinc-500">
          <span>FIELD-LEVEL DATA SANITIZATION</span>
          <span className="text-emerald-400">&lt;100MS RECORD RETRIEVAL</span>
        </div>
        <div className="space-y-1 text-[11px]">
          <div className="flex items-center justify-between text-zinc-300">
            <span>Patient Encounter #ENC-8421 • Cardiology Diagnosis</span>
            <span className="text-cyan-300 font-bold">Authorized (MD Role)</span>
          </div>
          <div className="flex items-center justify-between text-zinc-400">
            <span>Radiology MRI Diagnostic Scan (AWS S3)</span>
            <span className="text-emerald-400 font-bold">Presigned Stream</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
        <span>SECURITY COMPLIANCE VERIFIED</span>
        <span className="text-emerald-400">ZERO DATA LEAKS</span>
      </div>
    </div>
  );
};
