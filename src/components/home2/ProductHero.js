'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const BASE = process.env.NODE_ENV === 'production' ? '/Fahud' : '';

/* ─────────────────────────────────────────────────────────────────────────
   PRODUCTS
───────────────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 0,
    brand: 'FAHUD',
    title: 'Industrial Safety\nHelmets',
    desc: 'Maximum impact resistance engineered for every job site. Certified to EN 397 & ANSI Z89.1 standards — superior protection with all-day comfort for demanding environments.',
    img: `${BASE}/images/helmet.png`,
    alt: 'FAHUD Industrial Safety Helmet',
    href: '/services',
    glow: '#086698af',
    bgGrad: ['#e8e2ff', '#f5f0ff', '#deeeff'],   // purple-blue-white
  },
  {
    id: 1,
    brand: 'FAHUD',
    title: 'Advanced Air\nFiltration',
    desc: 'Keep your workers breathing safely. Our respirators remove hazardous particulates, fumes and gases — tested and certified for the harshest industrial environments.',
    img: `${BASE}/images/170.webp`,
    alt: 'FAHUD Respiratory Protection',
    href: '/services',
    glow: 'rgba(120, 201, 255, 0.84)',
    bgGrad: ['#daf0ff', '#eef8ff', '#e0f5ff'],   // cyan-white
  },
  {
    id: 2,
    brand: 'FAHUD',
    title: 'Full-Body\nProtection',
    desc: 'From flame-resistant coveralls to chemical suits — full-body PPE that shields against every workplace hazard with ISO-certified, durable workwear.',
    img: `${BASE}/images/171.webp`,
    alt: 'FAHUD Full Body PPE',
    href: '/services',
    glow: 'rgba(80, 224, 176, 0.65)',
    bgGrad: ['#d4f5e9', '#edfaf5', '#e4fff5'],   // green-white
  },
  {
    id: 3,
    brand: 'FAHUD',
    title: 'Full-Body\nProtection',
    desc: 'From flame-resistant coveralls to chemical suits — full-body PPE that shields against every workplace hazard with ISO-certified, durable workwear.',
    img: `${BASE}/images/172.webp`,
    alt: 'FAHUD Full Body PPE',
    href: '/services',
    glow: 'rgba(240, 212, 120, 0.6)',
    bgGrad: ['#d4f5e9', '#edfaf5', '#e4fff5'],   // green-white
  },
  {
    id: 4,
    brand: 'FAHUD',
    title: 'Full-Body\nProtection',
    desc: 'From flame-resistant coveralls to chemical suits — full-body PPE that shields against every workplace hazard with ISO-certified, durable workwear.',
    img: `${BASE}/images/helmet.png`,
    alt: 'FAHUD Full Body PPE',
    href: '/services',
    glow: '#f9f3eaa9',
    bgGrad: ['#d4f5e9', '#edfaf5', '#e4fff5'],   // green-white
  },
];

const N = PRODUCTS.length;

/* ─────────────────────────────────────────────────────────────────────────
   DEPTH KEYFRAMES  — positions relative to the stage's center (left:50%)
   These were tuned to match the reference clips exactly.

   The stage occupies the right ~62% of the viewport.
   Stage center (left:50% in stage) ≈ 69% of full viewport width.

   x values move cards relative to stage center:
     negative x = toward text/left
     positive x = deeper into background (rightward)

   Active product sits slightly LEFT of stage center so it feels center-screen.
   Mid & Far products are visible to the RIGHT, blurred in background.
───────────────────────────────────────────────────────────────────────── */
const KF = [
  //  x         scale  blur    opacity   (depth 0 = active/front)
  { x: '-6vw', s: 1.12, b: 0, o: 1, z: 30 },   // ACTIVE
  { x: '22vw', s: 0.78, b: 16, o: 0.72, z: 20 },   // MID
  { x: '46vw', s: 0.54, b: 32, o: 0.40, z: 10 },   // FAR
];

// Where exiting card goes (off left + fades)
const EXIT = { x: '-25vw', s: 0.45, b: 28, o: 0 };

/* ─────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────── */
export default function ProductHero() {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const textRefs = useRef([]);
  const bgRefs = useRef([]);
  const counterRef = useRef(null);
  const gsapCtx = useRef(null);

  useEffect(() => {
    let ctx;

    const init = async () => {
      const gsapMod = await import('gsap');
      const stMod = await import('gsap/ScrollTrigger');
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const { ScrollTrigger } = stMod;
      gsap.registerPlugin(ScrollTrigger);

      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      ctx = gsap.context(() => {

        /* ── 1. Set initial depth states for every card ─────────────────────
           Cards sit at `left: 50%` in the stage.
           xPercent: -50, yPercent: -50  →  perfectly centered baseline.
           We then shift with `x` to place them at their depth position.
        ─────────────────────────────────────────────────────────────────── */
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const kf = KF[i];
          if (!kf) {
            // Any extra cards beyond our depth layers start hidden off-right
            gsap.set(card, {
              xPercent: -50, yPercent: -50,
              x: '100vw', scale: 0.3, filter: 'blur(40px)', opacity: 0, zIndex: 0,
            });
            return;
          }
          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            x: kf.x,
            scale: kf.s,
            filter: `blur(${kf.b}px)`,
            opacity: i === 0 ? 1 : 0,
            zIndex: kf.z,
          });
        });

        /* Text panels: only #0 visible */
        textRefs.current.forEach((t, i) => {
          if (!t) return;
          gsap.set(t, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 18 });
        });

        /* Backgrounds: only #0 visible */
        bgRefs.current.forEach((bg, i) => {
          if (!bg) return;
          gsap.set(bg, { opacity: i === 0 ? 1 : 0 });
        });

        /* ── 2. Master scroll timeline ──────────────────────────────────────
           One GSAP timeline covers the full scroll distance.
           ScrollTrigger maps scroll progress → timeline progress.
           Each "chapter" = 1 time unit on the timeline.
           Total timeline duration = N - 1  chapters.

           At time = i  →  transition i starts
           At time = i+1 →  transition i ends / transition i+1 begins

           All product tweens run simultaneously (at same label) — this is
           the key to the "all products animate together" depth effect.
        ─────────────────────────────────────────────────────────────────── */
        const masterTL = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,         // 2s lag = smooth, premium Apple feel
            onUpdate: (self) => {
              // Live counter update
              const idx = Math.min(N - 1, Math.floor(self.progress * N));
              if (counterRef.current) {
                counterRef.current.textContent = String(idx + 1).padStart(2, '0');
              }
            },
          },
        });

        for (let i = 0; i < N - 1; i++) {
          const t = i;   // timeline label position (each chapter = 1 unit)

          /* ── Card i → EXIT (left) ── */
          masterTL.to(cardRefs.current[i], {
            x: EXIT.x,
            scale: 1.5,
            // filter: `blur(${EXIT.b}px)`,
            opacity: EXIT.o,
            zIndex: 1,
            ease: 'none',
            duration: 1,
          }, t);

          /* ── Card i+1 → ACTIVE (KF[0]) ── */
          masterTL.to(cardRefs.current[i + 1], {
            x: KF[0].x,
            scale: KF[0].s,
            filter: `blur(${KF[0].b}px)`,
            opacity: KF[0].o,
            zIndex: KF[0].z,
            ease: 'none',
            duration: 1,
          }, t);

          /* ── Card i+2 → MID (KF[1])  ── if exists */
          if (i + 2 < N) {
            masterTL.to(cardRefs.current[i + 2], {
              x: KF[1].x,
              scale: KF[1].s,
              filter: `blur(${KF[1].b}px)`,
              opacity: KF[1].o,
              zIndex: KF[1].z,
              ease: 'none',
              duration: 1,
            }, t);
          }

          /* ── Card i+3 → FAR (KF[2]) ── if exists (pre-loads next card) */
          if (i + 3 < N) {
            masterTL.to(cardRefs.current[i + 3], {
              x: KF[2].x,
              scale: KF[2].s,
              filter: `blur(${KF[2].b}px)`,
              opacity: KF[2].o,
              zIndex: KF[2].z,
              ease: 'none',
              duration: 1,
            }, t);
          }

          /* ── Text: exit i, enter i+1 ── */
          masterTL.to(textRefs.current[i], {
            opacity: 0,
            y: -14,
            ease: 'none',
            duration: 0.45,
          }, t);

          masterTL.to(textRefs.current[i + 1], {
            opacity: 1,
            y: 0,
            ease: 'none',
            duration: 0.45,
          }, t + 0.35);   // text enters slightly after image starts moving

          /* ── Background crossfade ── */
          masterTL.to(bgRefs.current[i], {
            opacity: 0,
            ease: 'none',
            duration: 0.8,
          }, t);

          if (bgRefs.current[i + 1]) {
            masterTL.to(bgRefs.current[i + 1], {
              opacity: 1,
              ease: 'none',
              duration: 0.8,
            }, t);
          }
        }

      }, wrapper);

      gsapCtx.current = ctx;
    };

    init();
    return () => { if (gsapCtx.current) gsapCtx.current.revert(); };
  }, []);

  /* ─── Build CSS background gradient string from color array ─── */
  const buildBg = (colors) =>
    `radial-gradient(ellipse 80% 70% at 75% 45%, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        /* ─── Outer scroll distance ─── */
        .pd-root {
          position: relative;
          height  : ${N * 100}vh;
        }

        /* ─── Pinned viewport ─── */
        .pd-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* ─── Layered backgrounds ─── */
        .pd-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          will-change: opacity;
        }

        /* ─── Layout grid ─── */
        .pd-layout {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 45% 1fr;
          z-index: 2;
        }

        /* ─── LEFT column: text panels ─── */
        .pd-left {
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          /* Fade right edge so text blends into image area */
          -webkit-mask-image: linear-gradient(90deg, black 60%, transparent 100%);
          mask-image: linear-gradient(90deg, black 60%, transparent 100%);
        }

        /* Individual text panel (all stacked at same position) */
        .pd-text {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 32px 0 72px;
          will-change: transform, opacity;
          opacity: 0;
        }
          .pd-text:first-child {
  opacity: 1;
}
          

        /* Brand label */
        .pd-brand {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pd-brand::before {
          content: '';
          display: block;
          width: 18px;
          height: 1.5px;
          background: #b0b7c5ff;
        }

        /* Product title — matches reference font weight/style */
        .pd-title {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -1.5px;
          color: #0f172a;
          margin: 0 0 16px;
          white-space: pre-line;
        }

        /* Description */
        .pd-desc {
          font-size: 13px;
          line-height: 1.78;
          color: #64748b;
          max-width: 300px;
          margin-bottom: 28px;
          font-weight: 400;
        }

        /* "EXPLORE PRODUCT ↗" link — exactly as in reference */
        .pd-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0f172a;
          text-decoration: none;
          position: relative;
        }
        .pd-cta::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0; right: 0;
          // height: 1px;
          // background: currentColor;
          transform-origin: left;
          transition: transform 0.28s ease;
        }
        .pd-cta:hover::after { transform: scaleX(1.08); }
        .pd-cta:hover { color: #0f172a; opacity: 0.7; }
        .pd-cta svg { width: 11px; height: 11px; }

        /* ─── RIGHT: stage — 3D product float area ─── */
        .pd-stage {
          position: relative;
          overflow: visible;   /* allow products to overflow right edge (they're clipped by pd-sticky) */
        }

        /* ─── Product cards — all stacked at left:50% top:50% ─── */
        .pd-card {
          position: absolute;
          top: 50%;
          left: 50%;
          /* GSAP controls: xPercent:-50, yPercent:-50, x offset, scale, filter */
          width: min(500px, 58vw);
          height: min(600px, 75vh);
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform, filter, opacity;
          transform-style: preserve-3d;
          opacity: 0;
        }

        /* Ambient glow blob beneath product */
        .pd-glow {
          position: absolute;
          inset: -40%;
          border-radius: 50%;
          filter: blur(48px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.85;
          will-change: opacity;
        }

        /* Product image */
        .pd-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
          user-select: none;
          filter:
            drop-shadow(0 35px 70px rgba(0,0,0,0.15))
            drop-shadow(0 10px 30px rgba(0,0,0,0.10));
        }

        /* ─── Floating arrow circle on active product (matches reference) ─── */
        .pd-circle-btn {
          position: absolute;
          /* sits at center of stage, near active product's bottom-right area */
          bottom: 26%;
          left: calc(35% + 27vw);   /* right of active product center */
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(15,23,42,0.22);
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #0f172a;
          z-index: 25;
          transition: background 0.25s ease, transform 0.25s ease, opacity 0.25s ease;
          cursor: pointer;
        }
        .pd-circle-btn:hover {
          background: rgba(255,255,255,0.9);
          transform: scale(1.12) translateX(3px);
          color: #0f172a;
        }
        .pd-circle-btn svg { width: 16px; height: 16px; }

        /* ─── Counter (bottom-right) — matches "02 /n" in clips ─── */
        .pd-counter {
          position: absolute;
          bottom: 38px;
          right: 52px;
          z-index: 30;
          display: flex;
          align-items: baseline;
          gap: 6px;
          pointer-events: none;
        }
        .pd-count-num {
          font-size: 30px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          letter-spacing: -1px;
        }
        .pd-count-sep {
          font-size: 14px;
          font-weight: 400;
          color: #cbd5e1;
        }
        .pd-count-total {
          font-size: 13px;
          font-weight: 400;
          color: #94a3b8;
        }

        /* ─── Scroll hint (bottom center) ─── */
        .pd-scroll-hint {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0.38;
          pointer-events: none;
        }
        .pd-scroll-hint span {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #475569;
        }
        .pd-scroll-mouse {
          width: 20px;
          height: 30px;
          border: 1.5px solid #94a3b8;
          border-radius: 10px;
          position: relative;
          display: flex;
          justify-content: center;
          padding-top: 5px;
        }
        .pd-scroll-wheel {
          width: 2.5px;
          height: 6px;
          background: #94a3b8;
          border-radius: 2px;
          animation: pdWheel 1.8s ease-in-out infinite;
        }
        @keyframes pdWheel {
          0%,100% { opacity:1; transform:translateY(0); }
          50%     { opacity:0.2; transform:translateY(8px); }
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .pd-layout { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
          .pd-left {
            -webkit-mask-image: none; mask-image: none;
            overflow: visible; position: relative;
          }
          .pd-text {
            position: relative; inset: auto;
            padding: 60px 24px 16px;
            text-align: center; align-items: center;
          }
          .pd-stage { min-height: 45vh;  }
          .pd-card { width: min(300px, 72vw); height: min(360px, 46vh); }
          .pd-circle-btn, .pd-scroll-hint { display: none; }
          .pd-counter { right: 20px; bottom: 20px; }
        }
      `}</style>

      {/* ──────────────────── OUTER SCROLL WRAPPER ──────────────────── */}
      <div
        className="pd-root fade-bottom"
        ref={wrapperRef}
        id="product-depth-hero about"
        aria-label="Product showcase"
      >

        {/* ──────────────────── PINNED STICKY PANEL ──────────────────── */}
        <div className="pd-sticky">

          {/* ── Layered animated backgrounds ── */}
          {PRODUCTS.map((p, i) => (
            <div
              key={`bg-${i}`}
              ref={el => bgRefs.current[i] = el}
              className="pd-bg"
              style={{ background: buildBg(p.bgGrad) }}
            />
          ))}

          {/* ── Layout ── */}
          <div className="pd-layout" >

            {/* ════════════════════════════════════════════════
                LEFT: Text panels (all stacked, GSAP controls opacity/y)
            ════════════════════════════════════════════════ */}
            <div className="pd-left">
              {PRODUCTS.map((p, i) => (
                <div
                  key={`text-${i}`}
                  ref={el => textRefs.current[i] = el}
                  className="pd-text"
                  aria-hidden={i !== 0}
                >
                  <p className="pd-brand">{p.brand}</p>

                  <h1 className="pd-title">{p.title}</h1>

                  <p className="pd-desc">{p.desc}</p>

                  <Link
                    href={p.href}
                    className="pd-cta"
                    id={`pd-cta-${i}`}
                  >
                    Explore Product
                    <svg viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 10L10 2M10 2H4M10 2v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            {/* ════════════════════════════════════════════════
                RIGHT: Stage — 3D floating product depth space
                All cards absolute at top:50% left:50%
                GSAP sets xPercent:-50, yPercent:-50, then x offset
            ════════════════════════════════════════════════ */}
            <div className="pd-stage" role="region" aria-label="Product carousel">
              {PRODUCTS.map((p, i) => (
                <div
                  key={`card-${i}`}
                  ref={el => cardRefs.current[i] = el}
                  className="pd-card"
                  aria-roledescription="slide"
                  aria-label={p.alt}
                >
                  {/* Glow blob */}
                  <div className="pd-glow" style={{ background: p.glow }} />

                  {/* Product image */}
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="pd-img"
                    draggable={false}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Circle arrow button (like reference clips) ── */}
          {/* <Link
            href="/services"
            className="pd-circle-btn"
            id="pd-circle-explore"
            aria-label="Explore product"
          >
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="M3.5 8h9M8.5 4.5l4 3.5-4 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link> */}

          {/* ── Counter (bottom right) — "01 /03" style ── */}
          {/* <div className="pd-counter" aria-live="polite">
            <span className="pd-count-num" ref={counterRef}>01</span>
            <span className="pd-count-sep">/</span>
            <span className="pd-count-total">{String(N).padStart(2, '0')}</span>
          </div> */}

          {/* ── Scroll hint ── */}
          {/* <div className="pd-scroll-hint" aria-hidden="true">
            <div className="pd-scroll-mouse">
              <div className="pd-scroll-wheel" />
            </div>
            <span>Scroll</span>
          </div> */}

        </div>{/* /pd-sticky */}
      </div>{/* /pd-root */}
      
    </>
  );
}
