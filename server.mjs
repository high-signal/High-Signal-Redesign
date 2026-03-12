import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const STATIC_DIR = join(__dirname, "artifacts/high-signal-landing/dist/public");

const MIME = {
  ".html": "text/html",
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

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost`);
  let pathname = decodeURIComponent(url.pathname);

  const direct = join(STATIC_DIR, pathname);
  if (await serveFile(direct, res)) return;

  const withIndex = join(STATIC_DIR, pathname, "index.html");
  if (await serveFile(withIndex, res)) return;

  const fallback = join(STATIC_DIR, "index.html");
  if (await serveFile(fallback, res)) return;

  res.writeHead(404);
  res.end("Not found");
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Serving on port ${PORT}`);
});
