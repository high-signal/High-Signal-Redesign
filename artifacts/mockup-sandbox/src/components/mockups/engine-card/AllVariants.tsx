import { CircuitChip as CircuitChipCard } from "./CircuitChip";
import { NeuralPulse as NeuralPulseCard } from "./NeuralPulse";
import { ChipBlocks as ChipBlocksCard } from "./ChipBlocks";

function VariantCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">{label}</span>
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/20 blur-[30px] rounded-full" />
        {children}
      </div>
    </div>
  );
}

function CircuitChipInline() {
  return (
    <div className="bg-[#0A1020] border border-cyan-500/50 p-6 rounded-xl text-center shadow-[0_0_30px_rgba(0,229,255,0.15)] w-40 relative z-10 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="30" width="80" height="80" rx="6" fill="none" stroke="#06B6D4" strokeWidth="1.5"/>
        <rect x="50" y="40" width="60" height="60" rx="3" fill="none" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="40" y1="50" x2="20" y2="50" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="40" y1="65" x2="20" y2="65" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="40" y1="80" x2="20" y2="80" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="40" y1="95" x2="20" y2="95" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="120" y1="50" x2="140" y2="50" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="120" y1="65" x2="140" y2="65" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="120" y1="80" x2="140" y2="80" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="120" y1="95" x2="140" y2="95" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="60" y1="30" x2="60" y2="10" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="75" y1="30" x2="75" y2="10" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="90" y1="30" x2="90" y2="10" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="100" y1="30" x2="100" y2="10" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="60" y1="110" x2="60" y2="130" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="75" y1="110" x2="75" y2="130" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="90" y1="110" x2="90" y2="130" stroke="#06B6D4" strokeWidth="1"/>
        <line x1="100" y1="110" x2="100" y2="130" stroke="#06B6D4" strokeWidth="1"/>
      </svg>
      <div className="relative z-20">
        <img src="/__mockup/images/logo.png" alt="High Signal" className="w-10 h-10 object-contain mx-auto mb-3" />
        <span className="font-extrabold text-white text-sm uppercase tracking-wide block">High Signal</span>
        <span className="font-extrabold text-white text-sm uppercase tracking-wide block">Engine</span>
      </div>
    </div>
  );
}

function NeuralPulseInline() {
  return (
    <>
      <style>{`
        @keyframes nodePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .node-pulse { animation: nodePulse 2.5s ease-in-out infinite; }
        .node-pulse-d1 { animation: nodePulse 2.5s ease-in-out 0.5s infinite; }
        .node-pulse-d2 { animation: nodePulse 2.5s ease-in-out 1.0s infinite; }
        .node-pulse-d3 { animation: nodePulse 2.5s ease-in-out 1.5s infinite; }
      `}</style>
      <div className="bg-[#0A1020] border border-cyan-500/50 p-6 rounded-xl text-center shadow-[0_0_30px_rgba(0,229,255,0.15)] w-40 relative z-10 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="35" x2="80" y2="60" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
          <line x1="130" y1="35" x2="80" y2="60" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
          <line x1="80" y1="60" x2="45" y2="95" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
          <line x1="80" y1="60" x2="115" y2="95" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
          <line x1="45" y1="95" x2="80" y2="125" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
          <line x1="115" y1="95" x2="80" y2="125" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
          <circle cx="30" cy="35" r="4" fill="#06B6D4" className="node-pulse" />
          <circle cx="130" cy="35" r="4" fill="#06B6D4" className="node-pulse-d1" />
          <circle cx="80" cy="60" r="5" fill="#06B6D4" className="node-pulse-d2" />
          <circle cx="45" cy="95" r="4" fill="#06B6D4" className="node-pulse-d3" />
          <circle cx="115" cy="95" r="4" fill="#06B6D4" className="node-pulse" />
          <circle cx="80" cy="125" r="4" fill="#06B6D4" className="node-pulse-d2" />
        </svg>
        <div className="relative z-20">
          <img src="/__mockup/images/logo.png" alt="High Signal" className="w-10 h-10 object-contain mx-auto mb-3" />
          <span className="font-extrabold text-white text-base block leading-tight">HIGH SIGNAL</span>
          <span className="font-semibold text-cyan-400 text-[10px] uppercase tracking-[0.25em] block mt-0.5">Engine</span>
        </div>
      </div>
    </>
  );
}

function ChipBlocksInline() {
  return (
    <div className="bg-[#0A1020] border border-cyan-500/50 p-5 rounded-xl text-center shadow-[0_0_30px_rgba(0,229,255,0.15)] w-40 relative z-10">
      <img src="/__mockup/images/logo.png" alt="High Signal" className="w-10 h-10 object-contain mx-auto mb-2" />
      <span className="font-black text-white text-lg block leading-tight">High Signal</span>
      <span className="font-black text-white text-lg block leading-tight mb-3">Engine</span>
      <div className="grid grid-cols-2 gap-1.5">
        {["NLP", "Graph", "ML", "Score"].map((label) => (
          <div
            key={label}
            className="bg-cyan-500/10 border border-cyan-500/30 rounded px-2 py-1 text-[9px] font-bold text-cyan-400 uppercase tracking-wider"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AllVariants() {
  return (
    <div className="min-h-screen bg-[#050810] flex items-center justify-center p-10">
      <div className="flex gap-12 items-start">
        <VariantCard label="Variant A — Circuit Chip">
          <CircuitChipInline />
        </VariantCard>
        <VariantCard label="Variant B — Neural Pulse">
          <NeuralPulseInline />
        </VariantCard>
        <VariantCard label="Variant C — Chip Blocks">
          <ChipBlocksInline />
        </VariantCard>
      </div>
    </div>
  );
}
