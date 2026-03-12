import { useEffect, useId, useRef, useState } from "react";

type Variant = "electron" | "oscilloscope" | "cpu";

interface AnimatedSignalPathProps {
  d: string;
  variant: Variant;
  width?: number;
  height?: number;
}

const PATHS = [
  "M 20 120 Q 160 40 300 140 T 580 100",
  "M 20 180 Q 160 240 300 160 T 580 200",
];

function ElectronVariant({ paths, width, height }: { paths: string[]; width: number; height: number }) {
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
          <stop offset="40%" stopColor="#f5c842" />
          <stop offset="100%" stopColor="#f5c842" stopOpacity="0" />
        </radialGradient>
      </defs>

      {paths.map((pathD, i) => {
        const dur = 3 + i * 0.7;
        const trailAnimName = `etrail-${uid}-${i}`;
        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke="#f5c842" strokeWidth="1" opacity="0.25" />

            <path
              d={pathD}
              fill="none"
              stroke="#f5c842"
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

            <circle r="7" fill="none" stroke="#f5c842" strokeWidth="0.5" opacity="0.3" filter={`url(#${glowId})`}>
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
                  stroke="#f5c842"
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
        paths.map((_, i) => {
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

function OscilloscopeVariant({ paths, width, height }: { paths: string[]; width: number; height: number }) {
  const uid = useId().replace(/:/g, "");
  const glowId = `og-${uid}`;
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [lengths, setLengths] = useState<number[]>([]);

  useEffect(() => {
    const newLengths = pathRefs.current.map((el) => (el ? el.getTotalLength() : 0));
    setLengths(newLengths);
  }, []);

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="block">
      <defs>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {paths.map((pathD, i) => {
        const len = lengths[i] ?? 0;
        const animName = `osc-draw-${uid}-${i}`;
        const noiseAnimName = `osc-noise-${uid}-${i}`;
        const drawDur = 2.5 + i * 0.5;
        const noiseSegLen = 25;
        return (
          <g key={i}>
            <path
              d={pathD}
              fill="none"
              stroke="#39ff14"
              strokeWidth="1"
              opacity="0.08"
            />

            {len > 0 && (
              <>
                <path
                  ref={(el) => { pathRefs.current[i] = el; }}
                  d={pathD}
                  fill="none"
                  stroke="#39ff14"
                  strokeWidth="2"
                  opacity="0.9"
                  filter={`url(#${glowId})`}
                  strokeDasharray={len}
                  strokeDashoffset={len}
                  style={{
                    animation: `${animName} ${drawDur}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
                <path
                  d={pathD}
                  fill="none"
                  stroke="#39ff14"
                  strokeWidth="4"
                  opacity="0.15"
                  filter={`url(#${glowId})`}
                  strokeDasharray={len}
                  strokeDashoffset={len}
                  style={{
                    animation: `${animName} ${drawDur}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />

                <path
                  d={pathD}
                  fill="none"
                  stroke="#39ff14"
                  strokeWidth="1.5"
                  opacity="0.6"
                  strokeLinecap="round"
                  strokeDasharray={`2 3 1 4 3 2 1 5 2 3 ${len}`}
                  strokeDashoffset={len + noiseSegLen}
                  style={{
                    animation: `${noiseAnimName} ${drawDur}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />

                <circle r="3" fill="#39ff14" opacity="0.8" filter={`url(#${glowId})`}>
                  <animateMotion
                    dur={`${drawDur}s`}
                    repeatCount="indefinite"
                    path={pathD}
                    keyPoints="0;1;1"
                    keyTimes="0;0.7;1"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1;0 0 1 1"
                    begin={`${i * 0.3}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;0.8;0"
                    keyTimes="0;0.7;1"
                    dur={`${drawDur}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.3}s`}
                  />
                </circle>
              </>
            )}

            {len === 0 && (
              <path
                ref={(el) => { pathRefs.current[i] = el; }}
                d={pathD}
                fill="none"
                stroke="transparent"
                strokeWidth="0"
              />
            )}
          </g>
        );
      })}

      <style>{
        lengths.map((len, i) => {
          const animName = `osc-draw-${uid}-${i}`;
          const noiseAnimName = `osc-noise-${uid}-${i}`;
          const noiseSegLen = 25;
          return `
            @keyframes ${animName} {
              0% { stroke-dashoffset: ${len}; opacity: 0.9; }
              70% { stroke-dashoffset: 0; opacity: 0.9; }
              85% { stroke-dashoffset: 0; opacity: 0.9; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            @keyframes ${noiseAnimName} {
              0% { stroke-dashoffset: ${len + noiseSegLen}; opacity: 0.6; }
              5% { opacity: 0.4; }
              10% { opacity: 0.7; }
              15% { opacity: 0.3; }
              20% { opacity: 0.6; }
              65% { stroke-dashoffset: ${noiseSegLen}; opacity: 0.5; }
              70% { stroke-dashoffset: ${noiseSegLen}; opacity: 0; }
              100% { opacity: 0; }
            }`;
        }).join("\n")
      }</style>
    </svg>
  );
}

function CpuVariant({ paths, width, height }: { paths: string[]; width: number; height: number }) {
  const uid = useId().replace(/:/g, "");
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [lengths, setLengths] = useState<number[]>([]);

  useEffect(() => {
    const newLengths = pathRefs.current.map((el) => (el ? el.getTotalLength() : 0));
    setLengths(newLengths);
  }, []);

  const pulses = [
    { delay: 0, speed: 0.12, dashLen: 8 },
    { delay: 0.04, speed: 0.18, dashLen: 6 },
    { delay: 0.08, speed: 0.10, dashLen: 10 },
    { delay: 0.15, speed: 0.25, dashLen: 5 },
    { delay: 0.20, speed: 0.15, dashLen: 7 },
    { delay: 0.06, speed: 0.30, dashLen: 12 },
  ];

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="block">
      {paths.map((pathD, pi) => {
        const len = lengths[pi];
        const ready = len !== undefined && len > 0;
        return (
          <g key={pi}>
            <path d={pathD} fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.12" />

            <path
              ref={(el) => { pathRefs.current[pi] = el; }}
              d={pathD}
              fill="none"
              stroke="transparent"
              strokeWidth="0"
            />

            {ready &&
              pulses.map((pulse, j) => {
                const gap = len - pulse.dashLen;
                const animName = `cpu-${uid}-${pi}-${j}`;
                const isWhiteHot = j % 3 === 0;
                return (
                  <path
                    key={`${pi}-${j}`}
                    d={pathD}
                    fill="none"
                    stroke={isWhiteHot ? "#ffffff" : "hsl(var(--primary))"}
                    strokeWidth={isWhiteHot ? "1.5" : "2"}
                    opacity={isWhiteHot ? "0.95" : "0.85"}
                    strokeDasharray={`${pulse.dashLen} ${gap}`}
                    strokeDashoffset={len}
                    strokeLinecap="butt"
                    style={{
                      animation: `${animName} ${pulse.speed}s linear infinite`,
                      animationDelay: `${pulse.delay + pi * 0.05}s`,
                    }}
                  />
                );
              })}
          </g>
        );
      })}

      <style>{
        paths.map((_, pi) =>
          pulses.map((_, j) => {
            const animName = `cpu-${uid}-${pi}-${j}`;
            const len = lengths[pi] ?? 1000;
            return `
              @keyframes ${animName} {
                0% { stroke-dashoffset: ${len}; }
                100% { stroke-dashoffset: ${-len}; }
              }`;
          }).join("\n")
        ).join("\n")
      }</style>
    </svg>
  );
}

export default function AnimatedSignalPath({ d, variant, width = 600, height = 300 }: AnimatedSignalPathProps) {
  const allPaths = d ? [d, ...PATHS.slice(1)] : PATHS;

  switch (variant) {
    case "electron":
      return <ElectronVariant paths={allPaths} width={width} height={height} />;
    case "oscilloscope":
      return <OscilloscopeVariant paths={allPaths} width={width} height={height} />;
    case "cpu":
      return <CpuVariant paths={allPaths} width={width} height={height} />;
  }
}
