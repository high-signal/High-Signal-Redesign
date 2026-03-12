export default function ChipEngineGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="106 106 288 288"
      className={className}
      aria-label="High Signal Engine chip"
    >
      <defs>
        <linearGradient id="ceg-chipSurface" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#242428" />
          <stop offset="40%"  stopColor="#1E1E22" />
          <stop offset="100%" stopColor="#141416" />
        </linearGradient>
        <linearGradient id="ceg-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#B0B0B8" />
          <stop offset="50%"  stopColor="#E0E0E8" />
          <stop offset="100%" stopColor="#909098" />
        </linearGradient>
        <filter id="ceg-innerglow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* Chip package */}
      <rect x="110" y="110" width="280" height="280" rx="10" fill="url(#ceg-chipSurface)" />

      {/* Catch-light top and left edge */}
      <rect x="110" y="110" width="280" height="1.5" fill="#3A3A42" opacity="0.6" />
      <rect x="110" y="110" width="1.5" height="280" fill="#303034" opacity="0.5" />

      {/* Chip border */}
      <rect x="110" y="110" width="280" height="280" rx="10" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.85" />

      {/* Logo */}
      <image href="/logo.png" x="211" y="158" width="78" height="78" />

      {/* HIGH SIGNAL */}
      <text
        x="250" y="292"
        textAnchor="middle"
        fontFamily="'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="30"
        letterSpacing="3"
        fill="url(#ceg-silver)"
      >
        HIGH SIGNAL
      </text>

      {/* ENGINE */}
      <text
        x="250" y="330"
        textAnchor="middle"
        fontFamily="'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="30"
        letterSpacing="3"
        fill="url(#ceg-silver)"
      >
        ENGINE
      </text>

      {/* HS1 etched mark — debossed, bottom-right */}
      {/* Shadow layer */}
      <text x="346" y="368.5" textAnchor="middle"
        fontFamily="'SF Mono', 'Courier New', monospace"
        fontWeight="600" fontSize="16" letterSpacing="3"
        fill="#0C0C0E" opacity="0.9">HS1</text>
      {/* Highlight layer */}
      <text x="344.6" y="367" textAnchor="middle"
        fontFamily="'SF Mono', 'Courier New', monospace"
        fontWeight="600" fontSize="16" letterSpacing="3"
        fill="#525260" opacity="0.55">HS1</text>
      {/* Body */}
      <text x="345.3" y="367.8" textAnchor="middle"
        fontFamily="'SF Mono', 'Courier New', monospace"
        fontWeight="600" fontSize="16" letterSpacing="3"
        fill="#36363E" opacity="1">HS1</text>
    </svg>
  );
}
