import { useId } from "react";

const PATHS = [
  "M 20 120 Q 160 40 300 140 T 580 100",
  "M 20 180 Q 160 240 300 160 T 580 200",
];

interface AnimatedSignalPathProps {
  d?: string;
  width?: number;
  height?: number;
}

export default function AnimatedSignalPath({ d, width = 600, height = 300 }: AnimatedSignalPathProps) {
  const allPaths = d ? [d, ...PATHS.slice(1)] : PATHS;
  const uid = useId().replace(/:/g, "");
  const glowId = `eg-${uid}`;
  const gradId = `ep-${uid}`;

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="block">
      <defs>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={gradId}>
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {allPaths.map((pathD, i) => {
        const dur = 3 + i * 0.7;
        const trailAnimName = `etrail-${uid}-${i}`;
        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.25" />

            <path
              d={pathD}
              fill="none"
              stroke="#06B6D4"
              strokeWidth="3"
              opacity="0.4"
              strokeLinecap="round"
              filter={`url(#${glowId})`}
              strokeDasharray="30 1000"
              strokeDashoffset="0"
              style={{
                animation: `${trailAnimName} ${dur}s ease-in-out infinite`,
              }}
            />

            <circle r="4" fill={`url(#${gradId})`} filter={`url(#${glowId})`}>
              <animateMotion
                dur={`${dur}s`}
                repeatCount="indefinite"
                path={pathD}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.42 0 0.58 1"
              />
            </circle>

            <circle r="2.5" fill="#ffffff" opacity="0.9">
              <animateMotion
                dur={`${dur}s`}
                repeatCount="indefinite"
                path={pathD}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.42 0 0.58 1"
              />
            </circle>

            <circle r="7" fill="none" stroke="#06B6D4" strokeWidth="0.5" opacity="0.3" filter={`url(#${glowId})`}>
              <animateMotion
                dur={`${dur}s`}
                repeatCount="indefinite"
                path={pathD}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.42 0 0.58 1"
              />
            </circle>

            {i === 0 && (
              <>
                <path
                  d={pathD}
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="2"
                  opacity="0.25"
                  strokeLinecap="round"
                  strokeDasharray="20 1000"
                  strokeDashoffset="0"
                  style={{
                    animation: `${trailAnimName}-b 4.5s ease-in-out infinite`,
                    animationDelay: "1.5s",
                  }}
                />
                <circle r="3" fill={`url(#${gradId})`} filter={`url(#${glowId})`} opacity="0.6">
                  <animateMotion
                    dur="4.5s"
                    repeatCount="indefinite"
                    path={pathD}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1"
                    begin="1.5s"
                  />
                </circle>
              </>
            )}
          </g>
        );
      })}

      <style>{
        allPaths.map((_, i) => {
          const trailAnimName = `etrail-${uid}-${i}`;
          return `
            @keyframes ${trailAnimName} {
              0% { stroke-dashoffset: 1030; }
              100% { stroke-dashoffset: -1030; }
            }
            @keyframes ${trailAnimName}-b {
              0% { stroke-dashoffset: 1020; }
              100% { stroke-dashoffset: -1020; }
            }`;
        }).join("\n")
      }</style>
    </svg>
  );
}
