import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Copy, Check, Play, Cpu, Database } from 'lucide-react';

interface CommandHistory {
  command: string;
  output: string | string[];
  isSuccess?: boolean;
}

export const SystemConsole: React.FC = () => {
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'whoami',
      output: 'Praveen Yonas — Full Stack Engineer / Senior Full Stack Developer (5+ YOE)',
      isSuccess: true,
    },
    {
      command: 'stack --primary',
      output: [
        '● Frontend: Angular 18+ • React.js • TypeScript • JavaScript • Tailwind CSS',
        '● Backend:  Node.js • Express.js • REST APIs • Microservices • JWT • RBAC',
        '● Database: MongoDB Aggregation Pipelines • Compound Indexing • SQL',
        '● Cloud:    AWS (EC2, S3, Amplify) • Nginx • PM2 • Git CI/CD',
        '● Real-Time: Socket.io • Bulk SMS & WhatsApp Business API • MRI Webhooks'
      ],
      isSuccess: true,
    },
    {
      command: 'status --production',
      output: '⚡ Operational. Available for Senior Full Stack & Lead Engineering Roles.',
      isSuccess: true,
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const commandCatalog: Record<string, string | string[]> = {
    whoami: 'Praveen Yonas — Full Stack Engineer / Senior Full Stack Developer (5+ YOE)',
    stack: [
      '⚡ Frontend: Angular 18+, React.js, TypeScript, PrimeNG, Tailwind CSS',
      '⚡ Backend: Node.js, Express.js, High-Throughput REST APIs, Microservices, JWT',
      '⚡ Database: MongoDB, Aggregation Pipelines, Compound Indexing, SQL',
      '⚡ Cloud & DevOps: AWS EC2, S3, Amplify, Nginx Reverse Proxy, PM2',
      '⚡ Real-Time & Messaging: Socket.io, Bulk SMS & WhatsApp API, MRI Webhooks'
    ],
    status: '● Available for technical leadership, enterprise consulting & full-time senior engineering roles.',
    arch: [
      '┌─ Tier 1: Angular / React SPAs with RxJS & PrimeNG Component Architecture',
      '├─ Tier 2: Nginx SSL Terminator & Rate Limiter Gateway',
      '├─ Tier 3: Node.js / Express PM2 Clustered Microservices',
      '├─ Tier 4: MongoDB Compound-Indexed Cluster (-50% Latency Optimization)',
      '└─ Tier 5: AWS S3 Encrypted Presigned Document Vault'
    ],
    metrics: [
      'Uptime: 99.98% across AWS deployments',
      'Production Systems Shipped: 20+',
      'Peak Query Acceleration: 50% response speed boost with MongoDB indexing',
      'Experience: 5+ Years in Full Stack Software Engineering'
    ],
    contact: 'Email: yonaspraveen@gmail.com | Phone: +91 96268 30829 | LinkedIn: /in/praveen-y-751125178 | GitHub: praveeny5117',
    clear: '__CLEAR__'
  };

  const handleExecuteCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const matchedKey = Object.keys(commandCatalog).find(k => trimmed.startsWith(k));
    const response = matchedKey 
      ? commandCatalog[matchedKey]
      : `zsh: command not found: "${cmd}". Available commands: whoami, stack, status, arch, metrics, contact, clear`;

    setHistory(prev => [
      ...prev,
      {
        command: cmd,
        output: response,
        isSuccess: !!matchedKey
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleExecuteCommand(inputVal);
    }
  };

  const handlePresetClick = (preset: string) => {
    setInputVal(preset);
    setTimeout(() => {
      handleExecuteCommand(preset);
    }, 150);
  };

  const handleCopyConsole = () => {
    const content = history
      .map(h => `$ ${h.command}\n${Array.isArray(h.output) ? h.output.join('\n') : h.output}`)
      .join('\n\n');
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="terminal-window w-full rounded-2xl bg-[#0A0A0C] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs sm:text-[13px]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111115] border-b border-white/[0.08] select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-2 ml-3 text-zinc-400 text-xs">
            <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span className="text-zinc-300 font-semibold tracking-wide">developer@portfolio:~</span>
            <span className="hidden sm:inline px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-zinc-400">zsh</span>
          </div>
        </div>

        {/* Live system state metrics */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>NODE_ENV=production</span>
          </div>

          <button
            onClick={handleCopyConsole}
            aria-label="Copy terminal log"
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
            title="Copy terminal session"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Quick Command Chips */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-black/40 border-b border-white/5 overflow-x-auto text-[11px] scrollbar-none">
        <span className="text-zinc-500 mr-1 select-none flex items-center gap-1">
          <Play className="w-2.5 h-2.5 text-[#00F0FF]" />
          quick:
        </span>
        {['whoami', 'stack', 'status', 'arch', 'metrics', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handlePresetClick(cmd)}
            className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-[#00F0FF]/15 border border-white/10 hover:border-[#00F0FF]/40 text-zinc-300 hover:text-[#00F0FF] transition-all whitespace-nowrap active:scale-95"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 max-h-[340px] min-h-[260px] overflow-y-auto space-y-4 leading-relaxed selection:bg-[#00F0FF]/30">
        <div className="text-zinc-500 text-[11px] select-none">
          Last login: {new Date().toLocaleDateString()} from 127.0.0.1 (AWS EC2 / MEAN Kernel 6.4)
        </div>

        {history.map((entry, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="text-[#00F0FF] font-bold select-none">$</span>
              <span className="font-semibold text-white">{entry.command}</span>
            </div>

            <div className="pl-4 border-l border-white/10 text-zinc-300">
              {Array.isArray(entry.output) ? (
                <div className="space-y-1">
                  {entry.output.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={
                        line.startsWith('⚡')
                          ? 'text-cyan-300'
                          : line.startsWith('┌') || line.startsWith('├') || line.startsWith('└')
                          ? 'text-purple-300/90'
                          : 'text-zinc-300'
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={
                    entry.output.includes('Available')
                      ? 'text-emerald-400 font-medium'
                      : entry.isSuccess
                      ? 'text-zinc-200'
                      : 'text-amber-400'
                  }
                >
                  {entry.output}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 pt-1 text-zinc-200">
          <span className="text-[#00F0FF] font-bold select-none">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'stack', 'arch', 'metrics' or 'clear'..."
            aria-label="Interactive terminal command input"
            className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-xs sm:text-[13px]"
          />
          <span className="inline-block w-2 h-4 bg-[#00F0FF] animate-pulse select-none" />
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Terminal Footer Info Bar */}
      <div className="px-4 py-2 bg-[#0E0E12] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 select-none">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-[#00F0FF]" />
            Node.js v20 LTS
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Database className="w-3 h-3 text-emerald-400" />
            MongoDB 7.0
          </span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <span>UTF-8</span>
          <span>•</span>
          <span className="text-emerald-400">0 errors</span>
        </div>
      </div>
    </div>
  );
};
