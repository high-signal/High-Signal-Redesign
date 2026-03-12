export function ChipBlocks() {
  return (
    <div className="min-h-screen bg-[#050810] flex items-center justify-center p-8">
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/20 blur-[30px] rounded-full" />
        <div className="bg-[#0A1020] border border-cyan-500/50 p-5 rounded-xl text-center shadow-[0_0_30px_rgba(0,229,255,0.15)] w-48 relative z-10">
          <img src="/__mockup/images/logo.png" alt="High Signal" className="w-10 h-10 object-contain mx-auto mb-2" />
          <span className="font-black text-white text-base block leading-tight">High Signal</span>
          <span className="font-black text-white text-base block leading-tight mb-3">Engine</span>

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
      </div>
    </div>
  );
}
