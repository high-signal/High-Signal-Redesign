import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const logoB64 = "data:image/png;base64," + readFileSync(join(root, "artifacts/high-signal-landing/public/logo.png")).toString("base64");
const outDir = join(root, "artifacts/high-signal-landing/public/engine-variants");
mkdirSync(outDir, { recursive: true });

const shell = (title, bodyContent) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${title}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; width: 100%; }
  body {
    background: #050810;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    min-height: 100vh;
  }
  .glow { position: absolute; inset: -8px; background: rgba(6,182,212,0.18); filter: blur(28px); border-radius: 50%; pointer-events: none; }
  .card {
    position: relative;
    background: #0A1020;
    border: 1px solid rgba(6,182,212,0.5);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    box-shadow: 0 0 30px rgba(0,229,255,0.15);
    width: 160px;
    overflow: hidden;
  }
  .card-inner { position: relative; z-index: 2; }
  .logo { width: 40px; height: 40px; object-fit: contain; display: block; margin: 0 auto 12px; }
  .label { color: #fff; }
</style>
</head>
<body>
${bodyContent}
</body>
</html>`;

/* ── Variant A: Circuit Chip ── */
const variantA = shell("Variant A — Circuit Chip", `
<div style="position:relative;display:inline-block;">
  <div class="glow"></div>
  <div class="card">
    <svg style="position:absolute;inset:0;width:100%;height:100%;opacity:0.12" xmlns="http://www.w3.org/2000/svg">
      <rect x="34" y="26" width="92" height="92" rx="6" fill="none" stroke="#06B6D4" stroke-width="1.5"/>
      <rect x="46" y="38" width="68" height="68" rx="3" fill="none" stroke="#06B6D4" stroke-width="1"/>
      <line x1="34" y1="46" x2="14" y2="46" stroke="#06B6D4" stroke-width="1"/>
      <line x1="34" y1="61" x2="14" y2="61" stroke="#06B6D4" stroke-width="1"/>
      <line x1="34" y1="76" x2="14" y2="76" stroke="#06B6D4" stroke-width="1"/>
      <line x1="34" y1="91" x2="14" y2="91" stroke="#06B6D4" stroke-width="1"/>
      <line x1="126" y1="46" x2="146" y2="46" stroke="#06B6D4" stroke-width="1"/>
      <line x1="126" y1="61" x2="146" y2="61" stroke="#06B6D4" stroke-width="1"/>
      <line x1="126" y1="76" x2="146" y2="76" stroke="#06B6D4" stroke-width="1"/>
      <line x1="126" y1="91" x2="146" y2="91" stroke="#06B6D4" stroke-width="1"/>
      <line x1="56" y1="26" x2="56" y2="6"  stroke="#06B6D4" stroke-width="1"/>
      <line x1="71" y1="26" x2="71" y2="6"  stroke="#06B6D4" stroke-width="1"/>
      <line x1="86" y1="26" x2="86" y2="6"  stroke="#06B6D4" stroke-width="1"/>
      <line x1="101" y1="26" x2="101" y2="6" stroke="#06B6D4" stroke-width="1"/>
      <line x1="56" y1="118" x2="56" y2="138" stroke="#06B6D4" stroke-width="1"/>
      <line x1="71" y1="118" x2="71" y2="138" stroke="#06B6D4" stroke-width="1"/>
      <line x1="86" y1="118" x2="86" y2="138" stroke="#06B6D4" stroke-width="1"/>
      <line x1="101" y1="118" x2="101" y2="138" stroke="#06B6D4" stroke-width="1"/>
      <circle cx="14" cy="46" r="2" fill="#06B6D4"/>
      <circle cx="14" cy="61" r="2" fill="#06B6D4"/>
      <circle cx="14" cy="76" r="2" fill="#06B6D4"/>
      <circle cx="14" cy="91" r="2" fill="#06B6D4"/>
      <circle cx="146" cy="46" r="2" fill="#06B6D4"/>
      <circle cx="146" cy="61" r="2" fill="#06B6D4"/>
      <circle cx="146" cy="76" r="2" fill="#06B6D4"/>
      <circle cx="146" cy="91" r="2" fill="#06B6D4"/>
    </svg>
    <div class="card-inner">
      <img class="logo" src="${logoB64}" alt="High Signal"/>
      <div class="label" style="font-weight:800;font-size:13px;letter-spacing:0.05em;text-transform:uppercase;line-height:1.3">HIGH SIGNAL<br>ENGINE</div>
    </div>
  </div>
</div>`);

/* ── Variant B: Neural Pulse ── */
const variantB = shell("Variant B — Neural Pulse", `
<style>
@keyframes nodePulse { 0%,100%{opacity:0.35} 50%{opacity:1} }
.np  { animation: nodePulse 2.5s ease-in-out infinite; }
.np1 { animation: nodePulse 2.5s ease-in-out 0.5s infinite; }
.np2 { animation: nodePulse 2.5s ease-in-out 1.0s infinite; }
.np3 { animation: nodePulse 2.5s ease-in-out 1.5s infinite; }
</style>
<div style="position:relative;display:inline-block;">
  <div class="glow"></div>
  <div class="card">
    <svg style="position:absolute;inset:0;width:100%;height:100%" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="35" x2="80" y2="60" stroke="#06B6D4" stroke-width="0.8" opacity="0.2"/>
      <line x1="130" y1="35" x2="80" y2="60" stroke="#06B6D4" stroke-width="0.8" opacity="0.2"/>
      <line x1="80" y1="60" x2="45" y2="95" stroke="#06B6D4" stroke-width="0.8" opacity="0.2"/>
      <line x1="80" y1="60" x2="115" y2="95" stroke="#06B6D4" stroke-width="0.8" opacity="0.2"/>
      <line x1="45" y1="95" x2="80" y2="125" stroke="#06B6D4" stroke-width="0.8" opacity="0.2"/>
      <line x1="115" y1="95" x2="80" y2="125" stroke="#06B6D4" stroke-width="0.8" opacity="0.2"/>
      <line x1="30" y1="35" x2="45" y2="95" stroke="#06B6D4" stroke-width="0.8" opacity="0.13"/>
      <line x1="130" y1="35" x2="115" y2="95" stroke="#06B6D4" stroke-width="0.8" opacity="0.13"/>
      <circle cx="30" cy="35" r="4" fill="#06B6D4" class="np"/>
      <circle cx="130" cy="35" r="4" fill="#06B6D4" class="np1"/>
      <circle cx="80" cy="60" r="5" fill="#06B6D4" class="np2"/>
      <circle cx="45" cy="95" r="4" fill="#06B6D4" class="np3"/>
      <circle cx="115" cy="95" r="4" fill="#06B6D4" class="np"/>
      <circle cx="80" cy="125" r="4" fill="#06B6D4" class="np2"/>
    </svg>
    <div class="card-inner">
      <img class="logo" src="${logoB64}" alt="High Signal"/>
      <div class="label" style="font-weight:800;font-size:15px;line-height:1.2">HIGH SIGNAL</div>
      <div style="color:#06B6D4;font-size:9px;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;margin-top:3px">Engine</div>
    </div>
  </div>
</div>`);

/* ── Variant C: Chip Blocks ── */
const variantC = shell("Variant C — Chip Blocks", `
<div style="position:relative;display:inline-block;">
  <div class="glow"></div>
  <div class="card" style="padding:20px">
    <div class="card-inner">
      <img class="logo" src="${logoB64}" alt="High Signal"/>
      <div class="label" style="font-weight:900;font-size:17px;line-height:1.2;margin-bottom:12px">High Signal<br>Engine</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        ${["NLP","Graph","ML","Score"].map(l => `<div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:4px;padding:5px 4px;font-size:9px;font-weight:700;color:#06B6D4;letter-spacing:0.12em;text-transform:uppercase">${l}</div>`).join("")}
      </div>
    </div>
  </div>
</div>`);

writeFileSync(join(outDir, "circuit-chip.html"), variantA);
writeFileSync(join(outDir, "neural-pulse.html"), variantB);
writeFileSync(join(outDir, "chip-blocks.html"), variantC);

console.log("Written to:", outDir);
