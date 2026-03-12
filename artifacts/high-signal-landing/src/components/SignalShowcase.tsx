import AnimatedSignalPath from "./AnimatedSignalPath";

const HERO_PATH = "M 20 120 Q 160 40 300 140 T 580 100";

const variants = [
  {
    key: "electron" as const,
    label: "A — Electrons",
    desc: "Glowing orbs drift along conductor paths with warm amber trails",
    bg: "bg-[#0a0a0f]",
  },
  {
    key: "oscilloscope" as const,
    label: "B — Oscilloscope",
    desc: "Phosphor-green trace draws from static noise into a clean signal",
    bg: "bg-[#0a0f0a]",
  },
  {
    key: "cpu" as const,
    label: "C — Micro-currents",
    desc: "Dense, staggered pulses shoot along PCB traces at varying speeds",
    bg: "bg-[#050810]",
  },
];

export default function SignalShowcase() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-primary/10 text-primary border border-primary/20 mb-6 uppercase">
          Signal Animation Preview
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Choose your signal style
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {variants.map((v) => (
          <div
            key={v.key}
            className="rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors duration-300"
          >
            <div className={`${v.bg} aspect-[2/1] flex items-center justify-center p-4`}>
              <AnimatedSignalPath d={HERO_PATH} variant={v.key} />
            </div>
            <div className="bg-card/80 px-5 py-4 border-t border-border/50">
              <h3 className="text-white font-bold text-sm mb-1">{v.label}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
