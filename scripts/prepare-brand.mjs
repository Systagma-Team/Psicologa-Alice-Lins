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

// Ícones: símbolo (cobre) sobre bordô, com margem, para aba do navegador e tela inicial
const symbolBuf = await trim(symbolSource).png().toBuffer();
for (const [name, size] of [['favicon', 64], ['apple-touch-icon', 180]]) {
  const inner = await sharp(symbolBuf)
    .resize({ width: Math.round(size * 0.68) })
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: '#521a1b' } })
    .composite([{ input: inner, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(`public/${name}.png`);
}
console.log('icons ok');
