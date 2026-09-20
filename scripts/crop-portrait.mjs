// Recorte PROVISÓRIO do retrato a partir de screenshot do Instagram.
// Substituir por foto original em alta resolução (ver docs/PENDING.md).
import sharp from 'sharp';
const src = 'references/alice-lins-psychologist-kit/client-profile/sources/instagram/instagram-source-02.png';
const out = 'src/assets/photos/alice-portrait-provisional.jpg';
const [left, top, width, height] = [352, 541, 289, 480];
await sharp(src)
  .extract({ left, top, width, height })
  .resize({ width: width * 2, kernel: 'lanczos3' })
  .sharpen({ sigma: 0.8 })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(out);
console.log('ok', out);
