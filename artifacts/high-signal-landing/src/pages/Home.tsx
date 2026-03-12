import { motion } from "framer-motion";
import { 
  Bot, 
  Coins, 
  Vote, 
  MessageSquare, 
  Share2, 
  CheckCircle2, 
  Network
} from "lucide-react";

// --- Custom UI Components for landing page ---
const Section = ({ id, children, className = "" }: { id?: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-primary/10 text-primary border border-primary/20 mb-6 uppercase">
    {children}
  </div>
);

// --- Page Sections ---

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="High Signal" className="w-7 h-7 object-contain" />
          <span className="text-xl font-bold tracking-tight text-white">High Signal</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Problem</a>
          <a href="#solution" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Solution</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">How it works</a>
        </div>
        <div>
          <a href="https://app.highsignal.xyz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all duration-300">
            Launch App
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Node graph SVG decoration */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 200 300 Q 400 200 600 400 T 1000 300" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 100 600 Q 300 700 500 500 T 900 600" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
        <circle cx="200" cy="300" r="4" fill="hsl(var(--primary))" />
        <circle cx="600" cy="400" r="6" fill="hsl(var(--primary))" className="animate-pulse" />
        <circle cx="1000" cy="300" r="4" fill="hsl(var(--primary))" />
        <circle cx="500" cy="500" r="5" fill="hsl(var(--primary))" />
      </svg>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6">
            Find the voices<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">that matter</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            High Signal turns noisy community data into a trusted reputation score that helps protocols identify, reward, and retain their most valuable contributors.
          </p>

          <div className="flex justify-center">
            <Badge>AI-powered community intelligence</Badge>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <div className="border-y border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
        <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Trusted by leading protocols</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder text logos resembling actual protocol logos */}
          <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tighter">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xs">L</div> Lido
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tighter">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-xs">C</div> CoW Swap
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tighter">
            <div className="w-8 h-8 rounded-sm rotate-45 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xs"><span className="-rotate-45">A</span></div> Aztec
          </div>
        </div>
      </div>
    </div>
  );
}

function Problem() {
  const problems = [
    {
      icon: <Bot className="w-8 h-8 text-destructive mb-4" />,
      title: "Bots & Sybils",
      desc: "Fake engagement artificially inflates community metrics, making it impossible to measure true growth and health."
    },
    {
      icon: <Coins className="w-8 h-8 text-destructive mb-4" />,
      title: "Airdrop Chasers",
      desc: "Mercenary users drain incentive budgets and immediately dump tokens, providing zero long-term value to the protocol."
    },
    {
      icon: <Vote className="w-8 h-8 text-destructive mb-4" />,
      title: "Wasted Governance",
      desc: "Low quality votes from disengaged holders drown out the valuable, high-context feedback from real contributors."
    }
  ];

  return (
    <Section id="problem" className="relative !pt-12 md:!pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Crypto communities are full of noise.</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Without a way to filter the signal from the noise, protocols waste resources on the wrong users.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-8 hover:border-destructive/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/0 group-hover:bg-destructive transition-colors duration-300" />
            {p.icon}
            <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Solution() {
  return (
    <Section id="solution" className="bg-card/50 border-y border-border/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            One reputation score. <br/>
            <span className="text-primary">Infinite signal.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We aggregate disparate data sources across social platforms, forums, and on-chain activity to build a unified, Sybil-resistant reputation score, using AI sentiment analysis
          </p>
          <ul className="space-y-4">
            {['Identify genuine contributors that add real value to discussions', 'Filter out airdrop farmers and bots', 'Deploy targeted, high-ROI incentives'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Visual Architecture Diagram */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] w-full rounded-xl border border-border bg-[#050810] p-6 shadow-2xl flex items-center justify-center"
        >
          {/* Connecting SVG lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 120 100 C 200 100, 200 200, 280 200" fill="none" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 120 200 C 200 200, 200 200, 280 200" fill="none" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 120 300 C 200 300, 200 200, 280 200" fill="none" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 4" />
            
            <path d="M 440 200 L 520 200" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]" />
          </svg>

          <div className="relative w-full h-full flex items-center justify-between z-10">
            {/* Left Column: Data Sources */}
            <div className="flex flex-col gap-6 w-32">
              <div className="bg-card border border-border p-3 rounded-lg text-center shadow-lg text-sm text-white flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" /> Discord
              </div>
              <div className="bg-card border border-border p-3 rounded-lg text-center shadow-lg text-sm text-white flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4 text-blue-400" /> Twitter
              </div>
              <div className="bg-card border border-border p-3 rounded-lg text-center shadow-lg text-sm text-white flex items-center justify-center gap-2">
                <Network className="w-4 h-4 text-primary" /> On-chain
              </div>
            </div>

            {/* Middle Column: Engine */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[30px] rounded-full" />
              <div className="bg-[#0A1020] border border-primary/50 p-6 rounded-xl text-center shadow-[0_0_30px_rgba(0,229,255,0.15)] w-40 relative z-10">
                <img src="/logo.png" alt="High Signal" className="w-8 h-8 object-contain mx-auto mb-3" />
                <span className="font-bold text-white text-sm">High Signal Engine</span>
              </div>
            </div>

            {/* Right Column: Output */}
            <div className="bg-primary border border-primary p-4 rounded-xl text-center shadow-[0_0_30px_rgba(0,229,255,0.3)] w-36">
              <div className="text-3xl font-black text-primary-foreground mb-1">98.5</div>
              <div className="text-xs font-semibold text-primary-foreground/80 uppercase">Reputation Score</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Benefits() {
  const metrics = [
    { title: "Quality Engagement", metric: "3x", desc: "Increase in forum proposals passing governance thresholds." },
    { title: "Reduced Waste", metric: "40%", desc: "Decrease in incentive spending lost to sybil farmers." },
    { title: "Voter Turnout", metric: "2.5x", desc: "Higher participation rate from identified high-signal wallets." },
    { title: "Organic Growth", metric: "85%", desc: "Of retained users come from targeted reputation rewards." },
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition-colors"
          >
            <div className="text-4xl font-black text-primary mb-2 text-glow">{m.metric}</div>
            <h4 className="text-white font-bold mb-2">{m.title}</h4>
            <p className="text-sm text-muted-foreground">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Connect your data",
      desc: "Link your Discord server, discourse forums, and protocol smart contracts. We ingest historical and real-time data seamlessly."
    },
    {
      num: "02",
      title: "Score every contributor",
      desc: "Our engine maps identities across platforms and assigns a dynamic Reputation Score based on the quality and impact of their contributions."
    },
    {
      num: "03",
      title: "Run targeted rewards",
      desc: "Export lists of high-signal addresses or integrate directly with your distribution contracts to reward your true community."
    }
  ];

  return (
    <Section id="how-it-works" className="relative">
      <div className="text-center mb-16">
        <Badge>Implementation</Badge>
        <h2 className="text-3xl md:text-5xl font-bold text-white">How it works</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-6 md:gap-12 relative mb-12 last:mb-0"
          >
            {/* Connecting Line */}
            {i !== steps.length - 1 && (
              <div className="absolute left-[27px] top-[60px] bottom-[-60px] w-[2px] bg-border z-0" />
            )}
            
            <div className="relative z-10 flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold text-xl shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                {step.num}
              </div>
            </div>
            <div className="pt-3">
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


function CTA() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10 bg-card/80 backdrop-blur-xl border border-primary/20 p-12 md:p-16 rounded-3xl shadow-[0_0_50px_rgba(0,229,255,0.05)]">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to find your highest-signal contributors?</h2>
        <p className="text-xl text-muted-foreground mb-10">Join Lido, CoW Swap, Aztec and more leading protocols building resilient communities.</p>
        
        <a
          href="https://app.highsignal.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-14 px-12 text-lg font-medium text-primary-foreground bg-primary rounded-md shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300"
        >
          Launch App
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[#03050A]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="High Signal" className="w-6 h-6 object-contain" />
            <span className="text-lg font-bold tracking-tight text-white">High Signal</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Find the voices that matter.<br/>
            Building the reputation graph for Ethereum.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="mailto:ad@highsignal.xyz" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground/50">
        &copy; {new Date().getFullYear()} High Signal. All rights reserved.
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <HowItWorks />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
