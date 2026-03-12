import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT, 10) || 3000;
const STATIC_DIR = join(__dirname, "artifacts/high-signal-landing/dist/public");

console.log(`[server.mjs] Starting up...`);
console.log(`[server.mjs] PORT=${PORT}`);
console.log(`[server.mjs] STATIC_DIR=${STATIC_DIR}`);

try {
  await stat(STATIC_DIR);
  console.log(`[server.mjs] Static directory exists`);
} catch {
  console.error(`[server.mjs] WARNING: Static directory not found at ${STATIC_DIR}`);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js":   "application/javascript",
  ".mjs":  "application/javascript",
  ".css":  "text/css",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".json": "application/json",
  ".webp": "image/webp",
};

async function serveFile(filePath, res) {
  try {
    await stat(filePath);
    const data = await readFile(filePath);
    const mime = MIME[extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": mime });
    res.end(data);
  } catch {
    return false;
  }
  return true;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost`);
  let pathname = decodeURIComponent(url.pathname);

  const direct = join(STATIC_DIR, pathname);
  if (await serveFile(direct, res)) return;

  const withIndex = join(STATIC_DIR, pathname, "index.html");
  if (await serveFile(withIndex, res)) return;

  const fallback = join(STATIC_DIR, "index.html");
  if (await serveFile(fallback, res)) return;

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`[server.mjs] Server listening on 0.0.0.0:${PORT}`);
  console.log(`[server.mjs] Ready to accept connections`);
});

server.on("error", (err) => {
  console.error(`[server.mjs] Server error:`, err);
  process.exit(1);
});
