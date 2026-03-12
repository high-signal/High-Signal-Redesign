export function CircuitChip() {
  return (
    <div className="min-h-screen bg-[#050810] flex items-center justify-center p-8">
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/20 blur-[30px] rounded-full" />
        <div className="bg-[#0A1020] border border-cyan-500/50 p-6 rounded-xl text-center shadow-[0_0_30px_rgba(0,229,255,0.15)] w-48 relative z-10 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="40" width="92" height="92" rx="6" fill="none" stroke="#06B6D4" strokeWidth="1.5"/>
            <rect x="62" y="52" width="68" height="68" rx="3" fill="none" stroke="#06B6D4" strokeWidth="1"/>

            <line x1="50" y1="60" x2="30" y2="60" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="50" y1="75" x2="30" y2="75" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="50" y1="90" x2="30" y2="90" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="50" y1="105" x2="30" y2="105" stroke="#06B6D4" strokeWidth="1"/>

            <line x1="142" y1="60" x2="162" y2="60" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="142" y1="75" x2="162" y2="75" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="142" y1="90" x2="162" y2="90" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="142" y1="105" x2="162" y2="105" stroke="#06B6D4" strokeWidth="1"/>

            <line x1="70" y1="40" x2="70" y2="20" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="85" y1="40" x2="85" y2="20" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="100" y1="40" x2="100" y2="20" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="115" y1="40" x2="115" y2="20" stroke="#06B6D4" strokeWidth="1"/>

            <line x1="70" y1="132" x2="70" y2="152" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="85" y1="132" x2="85" y2="152" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="100" y1="132" x2="100" y2="152" stroke="#06B6D4" strokeWidth="1"/>
            <line x1="115" y1="132" x2="115" y2="152" stroke="#06B6D4" strokeWidth="1"/>

            <circle cx="30" cy="60" r="2" fill="#06B6D4"/>
            <circle cx="30" cy="75" r="2" fill="#06B6D4"/>
            <circle cx="30" cy="90" r="2" fill="#06B6D4"/>
            <circle cx="30" cy="105" r="2" fill="#06B6D4"/>
            <circle cx="162" cy="60" r="2" fill="#06B6D4"/>
            <circle cx="162" cy="75" r="2" fill="#06B6D4"/>
            <circle cx="162" cy="90" r="2" fill="#06B6D4"/>
            <circle cx="162" cy="105" r="2" fill="#06B6D4"/>
          </svg>

          <div className="relative z-20">
            <img src="/__mockup/images/logo.png" alt="High Signal" className="w-10 h-10 object-contain mx-auto mb-3" />
            <span className="font-extrabold text-white text-sm uppercase tracking-wide block">High Signal</span>
            <span className="font-extrabold text-white text-sm uppercase tracking-wide block">Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
}
