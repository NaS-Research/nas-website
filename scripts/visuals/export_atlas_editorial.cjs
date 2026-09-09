// Export sRGB web derivatives from the AgX display-rendered PNG, never from the linear EXR.
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
async function main() {
  const [source, output] = process.argv.slice(2);
  if (!source || !output) throw new Error('Usage: node export_atlas_editorial.cjs source.png output-directory');
  await fs.mkdir(output, { recursive: true });
  const metadata = await sharp(source).metadata();
  if (metadata.width < 2400) throw new Error('Use the high-resolution master, not a preview.');
  for (const width of [960, 1600, 2400]) {
    const base = sharp(source).resize({ width }).withIccProfile('srgb');
    await base.clone().avif({ quality: 75, effort: 7, chromaSubsampling: '4:4:4' }).toFile(path.join(output, `sequence-sculpture-${width}.avif`));
    await base.clone().webp({ quality: 88, effort: 6 }).toFile(path.join(output, `sequence-sculpture-${width}.webp`));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
