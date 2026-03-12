export function NeuralPulse() {
  return (
    <div className="min-h-screen bg-[#050810] flex items-center justify-center p-8">
      <style>{`
        @keyframes nodePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .node-pulse { animation: nodePulse 2.5s ease-in-out infinite; }
        .node-pulse-delay1 { animation: nodePulse 2.5s ease-in-out 0.5s infinite; }
        .node-pulse-delay2 { animation: nodePulse 2.5s ease-in-out 1.0s infinite; }
        .node-pulse-delay3 { animation: nodePulse 2.5s ease-in-out 1.5s infinite; }
      `}</style>
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/20 blur-[30px] rounded-full" />
        <div className="bg-[#0A1020] border border-cyan-500/50 p-6 rounded-xl text-center shadow-[0_0_30px_rgba(0,229,255,0.15)] w-48 relative z-10 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="45" x2="96" y2="70" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
            <line x1="152" y1="45" x2="96" y2="70" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
            <line x1="96" y1="70" x2="55" y2="110" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
            <line x1="96" y1="70" x2="140" y2="110" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
            <line x1="55" y1="110" x2="96" y2="145" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
            <line x1="140" y1="110" x2="96" y2="145" stroke="#06B6D4" strokeWidth="0.8" opacity="0.2"/>
            <line x1="40" y1="45" x2="55" y2="110" stroke="#06B6D4" strokeWidth="0.8" opacity="0.15"/>
            <line x1="152" y1="45" x2="140" y2="110" stroke="#06B6D4" strokeWidth="0.8" opacity="0.15"/>

            <circle cx="40" cy="45" r="4" fill="#06B6D4" className="node-pulse" />
            <circle cx="152" cy="45" r="4" fill="#06B6D4" className="node-pulse-delay1" />
            <circle cx="96" cy="70" r="5" fill="#06B6D4" className="node-pulse-delay2" />
            <circle cx="55" cy="110" r="4" fill="#06B6D4" className="node-pulse-delay3" />
            <circle cx="140" cy="110" r="4" fill="#06B6D4" className="node-pulse" />
            <circle cx="96" cy="145" r="4" fill="#06B6D4" className="node-pulse-delay2" />
          </svg>

          <div className="relative z-20">
            <img src="/__mockup/images/logo.png" alt="High Signal" className="w-10 h-10 object-contain mx-auto mb-3" />
            <span className="font-extrabold text-white text-base block leading-tight">HIGH SIGNAL</span>
            <span className="font-semibold text-cyan-400 text-[10px] uppercase tracking-[0.25em] block mt-0.5">Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
}
