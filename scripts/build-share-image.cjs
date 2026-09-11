// Preserve the original NaS mark; compose a dedicated social preview card.
const sharp = require('sharp');
const path = require('node:path');
(async () => {
  const root = path.resolve(__dirname, '..');
  const mark = await sharp(path.join(root, 'public/assets/images/NaSLogo-transparent-hd.png'))
    .trim().resize({ height: 430 }).png().toBuffer();
  const card = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#080808' } })
    .composite([{ input: mark, gravity: 'centre' }]).png().toBuffer();
  const fs = require('node:fs/promises');
  await fs.writeFile(path.join(root, 'public/nas-logo-share-v1.png'), card);
  await fs.writeFile(path.join(root, 'public/og.png'), card);
})();
