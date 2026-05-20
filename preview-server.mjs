import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { render } from './dist/index.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { performance } from 'perf_hooks';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(helmet({
  contentSecurityPolicy: false
}));

app.use(compression());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(__dirname));

const cache = new Map();
const CACHE_LIMIT = 100;

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return h.toString();
}

function setCache(key, value) {
  if (cache.size >= CACHE_LIMIT) {
    const first = cache.keys().next().value;
    cache.delete(first);
  }
  cache.set(key, value);
}

function extractSource(input) {
  const text = String(input ?? '').trim();
  if (!text) return '';

  const patterns = [
    /(?:const|let|var)\s+source\s*=\s*`([\s\S]*?)`/m,
    /(?:const|let|var)\s+source\s*=\s*'([\s\S]*?)'/m,
    /(?:const|let|var)\s+source\s*=\s*"([\s\S]*?)"/m,
    /source\s*=\s*`([\s\S]*?)`/m
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) {
      return match[1].trim();
    }
  }

  return text;
}

app.get('/', (_, res) => {
  res.sendFile(join(__dirname, 'preview.html'));
});

app.post('/render', async (req, res) => {
  const input = req.body?.source ?? req.body?.code ?? '';
  const source = extractSource(input);

  if (!source || typeof source !== 'string') {
    return res.status(400).json({ error: 'Invalid source' });
  }

  const key = hash(source);

  if (cache.has(key)) {
    return res.json({
      cached: true,
      extracted: source !== String(input ?? '').trim(),
      svg: cache.get(key)
    });
  }

  try {
    const started = performance.now();
    const result = await render('live-preview', source, {
      theme: req.body?.theme || 'light'
    });
    const duration = Math.round(performance.now() - started);

    setCache(key, result.svg);

    return res.json({
      cached: false,
      extracted: source !== String(input ?? '').trim(),
      duration,
      svg: result.svg
    });
  } catch (err) {
    return res.status(400).json({
      error: err?.message || 'Render failed'
    });
  }
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`\n🧵 Wireloom Studio`);
  console.log(`🚀 http://localhost:${PORT}\n`);
});