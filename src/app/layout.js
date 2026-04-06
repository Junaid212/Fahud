import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Fahud - Safety & Technocal trading",
  description: "A Life Full Of Design Secrets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* CSS Assets */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/bootstrap-icons.css" />
        <link rel="stylesheet" href="/css/lc_lightbox.css" />
        <link rel="stylesheet" href="/css/bootstrap-slider.min.css" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="page-wraper">
          {children}
        </div>

        {/* JS Assets */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/theia-sticky-sidebar.js" strategy="lazyOnload" />
        <Script src="/js/jquery.bootstrap-touchspin.js" strategy="lazyOnload" />
        <Script src="/js/lc_lightbox.lite.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap-slider.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/img-parallax.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />

        <div className="cursor"></div>
        <div className="cursor2"></div>
      </body>
    </html>
  );
}
