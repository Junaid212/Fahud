import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const BASE_URL = 'https://thewebmax.org/Fahud/';

const pages = [
  'index-2.html', 'index-3.html', 'index-4.html',
  'about-1.html', 'about-2.html',
  'our-team.html', 'our-team-detail.html',
  'faq.html', 'pricing.html', 'error-404.html',
  'services.html', 'services-2.html', 'service-detail.html',
  'project-1.html', 'project-2.html', 'project-single.html',
  'blog-grid.html', 'blog-list.html', 'blog-masonry.html', 'blog-single.html',
  'shop.html', 'shop-detail.html',
  'contact.html'
];

const downloadFile = async (fileName) => {
  const url = `${BASE_URL}${fileName}`;
  console.log(`Downloading ${url}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch ${url}: ${res.statusText}`);
      return;
    }
    const destPath = path.join(process.cwd(), 'raw_pages', fileName);
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const fileStream = fs.createWriteStream(destPath, { flags: 'w' });
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
    console.log(`Saved to ${destPath}`);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error.message);
  }
};

const run = async () => {
  for (const page of pages) {
    await downloadFile(page);
  }
  console.log('Done downloading subpages.');
};

run();
