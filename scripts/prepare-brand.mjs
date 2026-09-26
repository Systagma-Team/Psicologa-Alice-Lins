// Gera os arquivos de marca usados no site a partir dos ORIGINAIS enviados pela cliente
// (src/assets/brand/logo miniatura.png, logo_render.png, favicon.png). Só recorta e
// redimensiona: o desenho do símbolo nunca é alterado. Rodar: node scripts/prepare-brand.mjs
import sharp from 'sharp';

const dir = 'src/assets/brand';
const horizontal = `${dir}/logo miniatura.png`; // cobre mais escuro (#C48C6C)
const vertical = `${dir}/logo_render.png`; // cobre mais claro (#DC9C74)
const symbolSource = `${dir}/favicon.png`; // símbolo isolado, já recortado pela cliente, fundo transparente

const trim = (input) => sharp(input).trim({ threshold: 1 });

// Logo horizontal e vertical, sem margens transparentes
await trim(horizontal).resize({ width: 1400 }).png({ compressionLevel: 9 }).toFile(`${dir}/logo-horizontal.png`);
await trim(vertical).resize({ width: 900 }).png({ compressionLevel: 9 }).toFile(`${dir}/logo-vertical.png`);

// Símbolo isolado (seção "Um símbolo em movimento")
await trim(symbolSource).resize({ width: 900 }).png({ compressionLevel: 9 }).toFile(`${dir}/symbol.png`);

for (const f of ['logo-horizontal', 'logo-vertical', 'symbol']) {
  const m = await sharp(`${dir}/${f}.png`).metadata();
  console.log(f, `${m.width}x${m.height}`);
}

// Ícones: símbolo (cobre) sobre bordô, com margem, para aba do navegador, tela inicial e Google.
// O Google exige favicon QUADRADO com lado MÚLTIPLO DE 48 px (48, 96, 144…): por isso 48 e 96 (o de 64 px
// anterior não era elegível). Nos resultados de busca do celular o ícone é recortado em círculo:
// o símbolo (68% da largura) fica inteiro dentro do círculo.
const symbolBuf = await trim(symbolSource).png().toBuffer();
const makeIcon = async (size) => {
  const inner = await sharp(symbolBuf).resize({ width: Math.round(size * 0.68) }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: '#521a1b' } })
    .composite([{ input: inner, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
};
import fs from 'node:fs';
fs.writeFileSync('public/favicon.png', await makeIcon(96)); // PNG 96×96 (mantém o mesmo endereço /favicon.png)
fs.writeFileSync('public/apple-touch-icon.png', await makeIcon(180));
// favicon.ico: contêiner ICO com UMA imagem PNG 48×48 (endereço padrão que rastreadores tentam)
const png48 = await makeIcon(48);
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0); // reservado
icoHeader.writeUInt16LE(1, 2); // tipo: ícone
icoHeader.writeUInt16LE(1, 4); // 1 imagem
icoHeader.writeUInt8(48, 6); // largura
icoHeader.writeUInt8(48, 7); // altura
icoHeader.writeUInt8(0, 8); // sem paleta
icoHeader.writeUInt8(0, 9);
icoHeader.writeUInt16LE(1, 10); // planos
icoHeader.writeUInt16LE(32, 12); // bits por pixel
icoHeader.writeUInt32LE(png48.length, 14); // tamanho da imagem
icoHeader.writeUInt32LE(22, 18); // deslocamento
fs.writeFileSync('public/favicon.ico', Buffer.concat([icoHeader, png48]));
console.log('icons ok (favicon.ico 48×48, favicon.png 96×96, apple-touch-icon 180×180)');

// ---------- Imagens públicas para Google/compartilhamento (só arquivos reais da marca) ----------
// public/img/og-alice-lins.jpg   1200×630  — Open Graph / schema `image`
// public/img/alice-lins-1x1.jpg  1000×1000 — schema `image` (retrato quadrado)
// public/img/logo-alice-lins.png  600×600  — schema `logo`
const photo = 'src/assets/photos/alice.jpeg';
const logoH = await sharp(`${dir}/logo-horizontal.png`).resize({ width: 600 }).toBuffer();
const logoHMeta = await sharp(logoH).metadata();
const archMask = Buffer.from(
  '<svg width="380" height="520" xmlns="http://www.w3.org/2000/svg"><path d="M0 190 A190 190 0 0 1 380 190 L380 500 Q380 520 360 520 L20 520 Q0 520 0 500 Z" fill="#fff"/></svg>',
);
const portrait = await sharp(photo)
  .resize({ width: 380, height: 520, fit: 'cover', position: 'top' })
  .composite([{ input: archMask, blend: 'dest-in' }])
  .png()
  .toBuffer();
const glow = Buffer.from(
  '<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="g" cx="0.9" cy="1.05" r="0.75"><stop offset="0" stop-color="#b86133" stop-opacity="0.34"/><stop offset="1" stop-color="#b86133" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>',
);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#521a1b' } })
  .composite([
    { input: glow },
    { input: logoH, left: 90, top: Math.round((630 - logoHMeta.height) / 2) },
    { input: portrait, left: 1200 - 90 - 380, top: 55 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/img/og-alice-lins.jpg');

await sharp(photo).extract({ left: 0, top: 60, width: 1000, height: 1000 }).jpeg({ quality: 86, mozjpeg: true }).toFile('public/img/alice-lins-1x1.jpg');

const logoV = await sharp(`${dir}/logo-vertical.png`).resize({ width: 440 }).toBuffer();
await sharp({ create: { width: 600, height: 600, channels: 3, background: '#521a1b' } })
  .composite([{ input: logoV, gravity: 'center' }])
  .png({ compressionLevel: 9 })
  .toFile('public/img/logo-alice-lins.png');
console.log('imagens públicas ok');
