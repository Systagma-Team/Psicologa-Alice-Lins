// Verifica contraste WCAG dos pares de cor usados no site.
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const pairs = [
  ['texto / fundo', '#171313', '#f6f0e8'],
  ['texto suave / fundo', '#695750', '#f6f0e8'],
  ['texto suave / faixa clara', '#695750', '#efe4d8'],
  ['texto suave / hover', '#695750', '#eadbd3'],
  ['bordô (títulos, botão) / fundo', '#521a1b', '#f6f0e8'],
  ['creme / bordô (botão, títulos)', '#f6f0e8', '#521a1b'],
  ['creme suave / bordô (texto)', '#e0d3c7', '#521a1b'],
  ['creme suave / bordô escuro (rodapé)', '#e0d3c7', '#4b1817'],
  ['bordô / creme (botão light)', '#521a1b', '#f6f0e8'],
  ['bordô / rosado (citação)', '#521a1b', '#eadbd3'],
  ['laranja / fundo (só grande)', '#b86133', '#f6f0e8'],
  ['laranja / cartão (numerais grandes)', '#b86133', '#fffdfc'],
  ['rosé / bordô (só detalhes)', '#bb8d82', '#521a1b'],
];
for (const [n, f, b] of pairs) {
  const r = ratio(f, b);
  console.log(`${r.toFixed(2).padStart(5)}:1  ${r >= 4.5 ? 'AA ' : r >= 3 ? 'AA-grande' : 'FALHA '}  ${n}`);
}
