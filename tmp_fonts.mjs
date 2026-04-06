import fs from 'fs';
import path from 'path';
import https from 'https';

const fonts = [
  '/fonts/bootstrap-icons.woff2',
  '/fonts/bootstrap-icons.woff',
  '/webfonts/fa-solid-900.woff2',
  '/webfonts/fa-solid-900.woff',
  '/webfonts/fa-solid-900.ttf',
  '/webfonts/fa-brands-400.woff2',
  '/webfonts/fa-brands-400.woff',
  '/webfonts/fa-brands-400.ttf',
  '/webfonts/fa-regular-400.woff2',
  '/webfonts/fa-regular-400.woff',
  '/webfonts/fa-regular-400.ttf'
];

fonts.forEach(f => {
  const url = 'https://thewebmax.org/Fahud' + f;
  const dest = path.join(process.cwd(), 'public', f);
  const dir = path.dirname(dest);

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const file = fs.createWriteStream(dest);
  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => file.close());
  }).on('error', err => {
    fs.unlink(dest, () => { });
    console.error(`Error downloading ${f}:`, err.message);
  });
});
console.log("Fonts downloaded successfully.");
