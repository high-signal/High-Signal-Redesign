import { useRef, useLayoutEffect, useState, useCallback } from "react";
import ChipEngineGraphic from "./ChipEngineGraphic";

const SOURCES = [
  { src: "/discord-logo.png", label: "Discord" },
  { src: "/x-logo.png", label: "Twitter" },
  { src: "/discourse-logo.png", label: "Forum" },
] as const;

const HORIZONTAL_THRESHOLD = 500;

interface LineData {
  d: string;
}

interface DotData {
  cx: number;
  cy: number;
  r: number;
}

function rel(el: DOMRect, container: DOMRect) {
  return {
    left: el.left - container.left,
    right: el.right - container.left,
    top: el.top - container.top,
    bottom: el.bottom - container.top,
    midX: (el.left + el.right) / 2 - container.left,
    midY: (el.top + el.bottom) / 2 - container.top,
  };
}

export default function FlowDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sourcesRowRef = useRef<HTMLDivElement>(null);
  const sourceRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const chipRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const rafId = useRef(0);

  const [lines, setLines] = useState<LineData[]>([]);
  const [dots, setDots] = useState<DotData[]>([]);
  const [lengths, setLengths] = useState<number[]>([]);
  const [horizontal, setHorizontal] = useState(true);

  const computePaths = useCallback(() => {
    const container = containerRef.current;
    const chip = chipRef.current;
    const score = scoreRef.current;
    const sourcesRow = sourcesRowRef.current;
    if (!container || !chip || !score || !sourcesRow) return;

    const cRect = container.getBoundingClientRect();
    const isHoriz = cRect.width >= HORIZONTAL_THRESHOLD;
    setHorizontal(isHoriz);

    const chipR = rel(chip.getBoundingClientRect(), cRect);
    const scoreR = rel(score.getBoundingClientRect(), cRect);
    const sourcesRowR = rel(sourcesRow.getBoundingClientRect(), cRect);

    const newLines: LineData[] = [];
    const newDots: DotData[] = [];

    if (!isHoriz) {
      const sx = sourcesRowR.midX;
      const sy = sourcesRowR.bottom;
      const ex = chipR.midX;
      const ey = chipR.top;
      const gapTop = ey - sy;

      newLines.push({
        d: `M ${sx} ${sy} C ${sx} ${sy + gapTop * 0.45}, ${ex} ${ey - gapTop * 0.45}, ${ex} ${ey}`,
      });
      newDots.push({ cx: sx, cy: sy, r: 4 });
      newDots.push({ cx: ex, cy: ey, r: 5 });

      const bx = chipR.midX;
      const by = chipR.bottom;
      const gapBot = scoreR.top - by;
      newLines.push({
        d: `M ${bx} ${by} C ${bx} ${by + gapBot * 0.45}, ${scoreR.midX} ${scoreR.top - gapBot * 0.45}, ${scoreR.midX} ${scoreR.top}`,
      });
      newDots.push({ cx: bx, cy: by, r: 5 });
      newDots.push({ cx: scoreR.midX, cy: scoreR.top, r: 4 });
    } else {
      sourceRefs.current.forEach((el) => {
        if (!el) return;
        const srcR = rel(el.getBoundingClientRect(), cRect);

        const sx = srcR.right;
        const sy = srcR.midY;
        const ex = chipR.left;
        const ey = chipR.midY;
        const gap = ex - sx;

        newLines.push({
          d: `M ${sx} ${sy} C ${sx + gap * 0.4} ${sy}, ${ex - gap * 0.4} ${ey}, ${ex} ${ey}`,
        });
        newDots.push({ cx: sx, cy: sy, r: 4 });
      });

      newDots.push({ cx: chipR.left, cy: chipR.midY, r: 5 });

      const exitX = chipR.right;
      const exitY = chipR.midY;
      const entryX = scoreR.left;
      const entryY = scoreR.midY;

      newLines.push({
        d: `M ${exitX} ${exitY} L ${entryX} ${entryY}`,
      });
      newDots.push({ cx: entryX, cy: entryY, r: 4 });
    }

    setLines(newLines);
    setDots(newDots);
  }, []);

  useLayoutEffect(() => {
    if (lines.length === 0) {
      setLengths([]);
      return;
    }
    const newLengths = lines.map((_, i) => {
      const el = pathRefs.current[i];
      return el ? el.getTotalLength() : 0;
    });
    setLengths(newLengths);
  }, [lines]);

  const scheduleRecompute = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(computePaths);
  }, [computePaths]);

  useLayoutEffect(() => {
    computePaths();

    const ro = new ResizeObserver(scheduleRecompute);

    if (containerRef.current) {
      ro.observe(containerRef.current);
    }

    const fallbackTimer = setTimeout(computePaths, 300);

    return () => {
      cancelAnimationFrame(rafId.current);
      clearTimeout(fallbackTimer);
      ro.disconnect();
    };
  }, [computePaths, scheduleRecompute]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-xl border border-border bg-[#050810] shadow-2xl overflow-hidden py-10"
    >
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-[5]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map((line, i) => {
          const len = lengths[i] ?? 0;
          return (
            <path
              key={i}
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              d={line.d}
              fill="none"
              stroke="#06B6D4"
              strokeWidth="1.5"
              strokeDasharray={len > 0 ? len : undefined}
              strokeDashoffset={0}
              opacity="0.7"
            />
          );
        })}
        {dots.map((dot, i) => (
          <circle
            key={`dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#06B6D4"
            opacity="0.9"
          />
        ))}
      </svg>

      <div
        className={`relative z-10 flex items-center gap-8 px-8 ${
          horizontal
            ? "flex-row justify-between px-12"
            : "flex-col justify-center"
        }`}
      >
        <div
          ref={sourcesRowRef}
          className={`flex gap-2 justify-center ${
            horizontal ? "flex-col gap-5 w-auto" : "flex-row w-full"
          }`}
        >
          {SOURCES.map(({ src, label }, i) => (
            <div
              key={label}
              ref={(el) => {
                sourceRefs.current[i] = el;
              }}
              className={`bg-card border border-border flex items-center justify-center rounded-lg text-white shadow-lg ${
                horizontal
                  ? "gap-2 py-3 px-5 text-sm min-w-[120px]"
                  : "gap-1.5 py-2.5 px-4 text-xs flex-1"
              }`}
            >
              <img
                src={src}
                alt={label}
                className={`w-auto ${horizontal ? "h-4" : "h-3.5"}`}
                style={{ mixBlendMode: "screen" }}
                onLoad={scheduleRecompute}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div
          ref={chipRef}
          className="relative flex items-center justify-center shrink-0"
        >
          <div
            className={`absolute bg-primary/20 rounded-full blur-[50px] ${
              horizontal ? "w-56 h-56" : "w-52 h-52"
            }`}
          />
          <ChipEngineGraphic
            className={`relative z-10 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] ${
              horizontal ? "w-52 h-52" : "w-44 h-44"
            }`}
          />
        </div>

        <div
          ref={scoreRef}
          className={`flex flex-col items-center gap-2 ${
            horizontal ? "w-36" : ""
          }`}
        >
          <div className="bg-[#0A1428] border-[3px] border-green-500 rounded-2xl px-5 py-3 text-center shadow-[0_0_20px_rgba(34,197,94,0.25)]">
            <div className="text-4xl font-black text-white">93</div>
          </div>
          <div className="text-xs font-semibold text-white/70 uppercase tracking-widest">
            Signal Strength
          </div>
        </div>
      </div>
    </div>
  );
}
