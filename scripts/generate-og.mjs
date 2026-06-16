/**
 * Gera public/og-image.png (1200×630) usando Sharp.
 * Sharp já é dependência transitiva do Astro — não precisa instalar nada extra.
 *
 * Uso:
 *   node scripts/generate-og.mjs
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT   = path.join(__dirname, '..', 'public', 'og-image.png');

const W = 1200;
const H = 630;

const svg = /* xml */`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Fundo gradiente -->
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#070b14"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>

    <!-- Orb azul -->
    <radialGradient id="orb1" cx="50%" cy="50%">
      <stop offset="0%"   stop-color="#58a6ff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#58a6ff" stop-opacity="0"/>
    </radialGradient>

    <!-- Orb roxo -->
    <radialGradient id="orb2" cx="50%" cy="50%">
      <stop offset="0%"   stop-color="#bc8cff" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#bc8cff" stop-opacity="0"/>
    </radialGradient>

    <!-- Gradiente do nome -->
    <linearGradient id="nameGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#58a6ff"/>
      <stop offset="50%"  stop-color="#bc8cff"/>
      <stop offset="100%" stop-color="#39d0d8"/>
    </linearGradient>
  </defs>

  <!-- Fundo -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Grid sutil -->
  ${Array.from({ length: 21 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="${H}" stroke="#58a6ff" stroke-width="0.5" opacity="0.04"/>`).join('')}
  ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 63}" x2="${W}" y2="${i * 63}" stroke="#58a6ff" stroke-width="0.5" opacity="0.04"/>`).join('')}

  <!-- Orbs de luz -->
  <ellipse cx="160" cy="160" rx="340" ry="280" fill="url(#orb1)"/>
  <ellipse cx="1080" cy="500" rx="280" ry="240" fill="url(#orb2)"/>

  <!-- Borda superior com gradiente -->
  <rect x="0" y="0" width="${W}" height="4" fill="url(#nameGrad)"/>

  <!-- Borda do card central -->
  <rect x="60" y="60" width="${W - 120}" height="${H - 120}" rx="16"
        fill="#0d1117" fill-opacity="0.7"
        stroke="#21262d" stroke-width="1"/>

  <!-- Logo <dp/> -->
  <text x="100" y="148" font-family="monospace" font-size="28" font-weight="700" fill="#8b949e">
    &lt;<tspan fill="#58a6ff">dp</tspan>/&gt;
  </text>

  <!-- Nome principal -->
  <text x="100" y="270"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="80" font-weight="900"
        fill="url(#nameGrad)"
        letter-spacing="-2">
    Daniel Paiva
  </text>

  <!-- Cargo -->
  <text x="102" y="330"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="28" font-weight="400"
        fill="#8b949e">
    Engenheiro de Software · .NET · Sistemas Distribuídos · Cloud
  </text>

  <!-- Tags de stack -->
  ${[
    { label: '.NET 10',      x: 100  },
    { label: 'AWS',          x: 228  },
    { label: 'Docker',       x: 316  },
    { label: 'Microservices',x: 434  },
    { label: 'Kafka',        x: 616  },
    { label: 'C#',           x: 718  },
  ].map(({ label, x }) => {
    const w = label.length * 10 + 28;
    return `
    <rect x="${x}" y="378" width="${w}" height="36" rx="8"
          fill="#58a6ff" fill-opacity="0.1"
          stroke="#58a6ff" stroke-opacity="0.25" stroke-width="1"/>
    <text x="${x + w / 2}" y="402"
          font-family="monospace" font-size="14" font-weight="500"
          fill="#58a6ff" text-anchor="middle">${label}</text>
    `;
  }).join('')}

  <!-- Separador -->
  <line x1="100" y1="450" x2="${W - 100}" y2="450"
        stroke="#21262d" stroke-width="1"/>

  <!-- URL -->
  <text x="100" y="488"
        font-family="monospace" font-size="18" font-weight="500"
        fill="#484f58">
    danhpaiva.github.io
  </text>

  <!-- Indicador "Disponível" -->
  <circle cx="${W - 200}" cy="481" r="6" fill="#3fb950"/>
  <text x="${W - 185}" y="488"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="18" font-weight="500"
        fill="#3fb950">
    Disponível
  </text>
</svg>
`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT);

console.log(`✓ OG image gerada em ${OUTPUT}`);
