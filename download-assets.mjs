import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const BASE_URL = 'https://thewebmax.org/Fahud';

const cssFiles = [
  '/css/bootstrap.min.css',
  '/css/font-awesome.min.css',
  '/css/owl.carousel.min.css',
  '/css/magnific-popup.min.css',
  '/css/swiper-bundle.min.css',
  '/css/style.css',
  '/css/bootstrap-icons.css',
  '/css/lc_lightbox.css',
  '/css/bootstrap-slider.min.css'
];

const jsFiles = [
  '/js/jquery-3.7.1.min.js',
  '/js/popper.min.js',
  '/js/bootstrap.min.js',
  '/js/magnific-popup.min.js',
  '/js/waypoints.min.js',
  '/js/counterup.min.js',
  '/js/isotope.pkgd.min.js',
  '/js/imagesloaded.pkgd.min.js',
  '/js/owl.carousel.min.js',
  '/js/theia-sticky-sidebar.js',
  '/js/swiper-bundle.min.js',
  '/js/gsap.min.js',
  '/js/custom.js',
  '/js/jquery.bootstrap-touchspin.js',
  '/js/lc_lightbox.lite.js',
  '/js/bootstrap-slider.min.js',
  '/js/img-parallax.js',
  '/js/wow.min.js'
];

const imgFiles = [
  '/images/logo-light.png',
  '/images/cart/pic-1.jpg',
  '/images/cart/pic-2.jpg',
  '/images/cart/pic-3.jpg',
  '/images/cart/pic-4.jpg',
  '/images/main-slider/slider1/pic1.png',
  '/images/main-slider/slider1/pic2.png',
  '/images/main-slider/slider1/pic3.png',
  '/images/main-slider/slider1/circle1.png',
  '/images/services/1.jpg',
  '/images/icons/skyline.png',
  '/images/services/2.jpg',
  '/images/icons/furniture-1.png',
  '/images/services/3.jpg',
  '/images/icons/brickwall.png',
  '/images/about2/l-pic.jpg',
  '/images/in-circle-bx.png',
  '/images/video-img2.jpg',
  '/images/icons/furniture-2.png',
  '/images/icons/window.png',
  '/images/icons/candles.png',
  '/images/icons/curtain.png',
  '/images/icons/key.png',
  '/images/sign-pic.png',
  '/images/client-logo/dark/1.png',
  '/images/client-logo/dark/2.png',
  '/images/client-logo/dark/3.png',
  '/images/client-logo/dark/4.png',
  '/images/client-logo/dark/5.png',
  '/images/client-logo/dark/6.png',
  '/images/award/pic1.jpg',
  '/images/award/pic2.jpg',
  '/images/award/pic3.jpg',
  '/images/award/pic4.jpg',
  '/images/award/pic5.jpg',
  '/images/project-3/m1.jpg',
  '/images/project-3/m2.jpg',
  '/images/project-3/m3.jpg',
  '/images/project-3/m4.jpg',
  '/images/project-3/m5.jpg',
  '/images/project-3/m6.jpg',
  '/images/project-3/m7.jpg',
  '/images/project-3/m8.jpg',
  '/images/project-3/m9.jpg',
  '/images/3dhouse.png',
  '/images/team/pic2.jpg',
  '/images/team/pic3.jpg',
  '/images/team/pic4.jpg',
  '/images/testimonials/pic1.jpg',
  '/images/testimonials/pic2.jpg',
  '/images/testimonials/pic3.jpg',
  '/images/testimonials/pic4.jpg',
  '/images/testimonials/pic5.jpg',
  '/images/blog/latest-2/bg1.jpg',
  '/images/blog/latest-2/bg2.jpg',
  '/images/blog/latest-2/bg3.jpg',
  '/images/logo-dark.png',
  '/images/blog/recent-blog/pic1.jpg',
  '/images/blog/recent-blog/pic2.jpg',
  '/images/blog/recent-blog/pic3.jpg',
  '/images/main-slider/slider1/light-dott-pattern.png',
  '/images/background/dark-dott-pattern.png',
  '/images/ab-bg.jpg',
  '/images/background/ab-bg2.jpg',
  '/images/background/count-bg.jpg'
];

const downloadFile = async (urlPath) => {
  const url = `${BASE_URL}${urlPath}`;
  console.log(`Downloading ${url}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch ${url}: ${res.statusText}`);
      return;
    }
    const destPath = path.join(process.cwd(), 'public', urlPath);
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const fileStream = fs.createWriteStream(destPath, { flags: 'wx' });
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
    console.log(`Saved to ${destPath}`);
  } catch (error) {
    if (error.code === 'EEXIST') {
      console.log(`File already exists, skipping: ${urlPath}`);
    } else {
      console.error(`Error downloading ${url}:`, error.message);
    }
  }
};

const run = async () => {
  for (const file of cssFiles) {
    await downloadFile(file);
  }
  for (const file of jsFiles) {
    await downloadFile(file);
  }
  for (const file of imgFiles) {
    await downloadFile(file);
  }
  console.log('Done downloading CSS/JS/Image assets.');
};

run();
