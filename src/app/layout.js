import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Fahud - Safety & Technocal trading",
  description: "A Life Full Of Design Secrets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* CSS Assets */}
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/bootstrap.min.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/font-awesome.min.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/owl.carousel.min.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/magnific-popup.min.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/swiper-bundle.min.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/style.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/bootstrap-icons.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/lc_lightbox.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/css/bootstrap-slider.min.css`} />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <div className="page-wraper">
          {children}
        </div>

        {/* JS Assets */}
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/jquery-3.7.1.min.js`} strategy="beforeInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/popper.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/bootstrap.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/magnific-popup.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/waypoints.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/counterup.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/isotope.pkgd.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/imagesloaded.pkgd.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/owl.carousel.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/theia-sticky-sidebar.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/jquery.bootstrap-touchspin.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/lc_lightbox.lite.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/bootstrap-slider.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/swiper-bundle.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/img-parallax.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/wow.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/gsap.min.js`} strategy="afterInteractive" />
        <Script src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/js/custom.js`} strategy="afterInteractive" />

        <div className="cursor"></div>
        <div className="cursor2"></div>
      </body>
    </html>
  );
}
