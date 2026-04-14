'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const BASE = process.env.NODE_ENV === 'production' ? '/Fahud' : '';

/* ─────────────────────────────────────────────
   Inline Lenis-compatible smooth scroll class
   Normalises scroll velocity across browsers
   without needing the npm package installed.
───────────────────────────────────────────── */
class SmoothScroller {
  constructor({ lerp = 0.09, onScroll } = {}) {
    this.lerp    = lerp;
    this.current = window.scrollY;
    this.target  = window.scrollY;
    this.onScroll = onScroll;
    this.rafId   = null;
    this.running = false;
    this._tick   = this._tick.bind(this);
    this._onNativeScroll = this._onNativeScroll.bind(this);
    window.addEventListener('scroll', this._onNativeScroll, { passive: true });
  }

  _onNativeScroll() {
    this.target = window.scrollY;
    if (!this.running) {
      this.running = true;
      this.rafId  = requestAnimationFrame(this._tick);
    }
  }

  _tick() {
    const diff = this.target - this.current;
    this.current += diff * this.lerp;

    if (this.onScroll) this.onScroll(this.current);

    if (Math.abs(diff) > 0.4) {
      this.rafId = requestAnimationFrame(this._tick);
    } else {
      this.current = this.target;
      if (this.onScroll) this.onScroll(this.current);
      this.running = false;
    }
  }

  destroy() {
    window.removeEventListener('scroll', this._onNativeScroll);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}

/* ────────────────── Split text helper ────────────────── */
function splitIntoCharSpans(el) {
  const words = el.textContent.split(' ');
  el.innerHTML = words.map(word =>
    `<span class="hs-word" style="display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:0.28em;">${
      word.split('').map(char =>
        `<span class="hs-char" style="display:inline-block;will-change:transform;">${char}</span>`
      ).join('')
    }</span>`
  ).join('');
  return el.querySelectorAll('.hs-char');
}

export default function HeroScrollSequence() {
  const outerRef  = useRef(null);   // scroll trigger wrapper (250vh)
  const stickyRef = useRef(null);   // sticky 100vh panel
  const bgRef     = useRef(null);   // background image (scales)
  const overlayRef= useRef(null);   // overlay (fades darker with scroll)
  const contentRef= useRef(null);   // text block (stays fixed)
  const smokeRef  = useRef(null);   // top-fade smoke bar
  const pillsRef  = useRef(null);   // bottom pill badges

  useEffect(() => {
    let gsapInstance, ScrollTrigger, timelines = [];
    let scrollRaf, scrollHandler;

    const init = async () => {
      /* ── 1. Load GSAP + ScrollTrigger ── */
      const gsapMod = await import('gsap');
      const stMod   = await import('gsap/ScrollTrigger');
      gsapInstance  = gsapMod.gsap ?? gsapMod.default;
      ScrollTrigger = stMod.ScrollTrigger;
      gsapInstance.registerPlugin(ScrollTrigger);

      /* ── 2. Split heading characters ── */
      const heading = contentRef.current?.querySelector('.hs-heading');
      if (!heading) return;
      const chars = splitIntoCharSpans(heading);

      /* ── 3. Initial hidden state (before entrance animation) ── */
      gsapInstance.set(chars, { y: '110%', opacity: 0 });
      gsapInstance.set('.hs-sub',             { opacity: 0, y: 28 });
      gsapInstance.set('.hs-brand',           { opacity: 0, y: 16 });
      gsapInstance.set('.hs-pills',           { opacity: 0, y: 20 });
      gsapInstance.set('.hs-cta-wrap',        { opacity: 0, y: 22 });
      gsapInstance.set('.hs-scroll-indicator',{ opacity: 0 });
      gsapInstance.set('.hs-line-left',  { scaleX: 0, transformOrigin: 'left center' });
      gsapInstance.set('.hs-line-right', { scaleX: 0, transformOrigin: 'right center' });

      /* ── 4. Entrance timeline ──────────────────────────────────
         Uses a 0.3s delay (not a ScrollTrigger) so it fires
         reliably even when the section starts at the top of page.
         power4.out = heavy, premium deceleration feel.
      ─────────────────────────────────────────────────────────── */
      const tl = gsapInstance.timeline({
        delay: 0.3,
        defaults: { ease: 'power4.out' },
      });

      tl.to('.hs-brand', { opacity: 1, y: 0, duration: 0.9 })
        .to(chars, {
          y: 0, opacity: 1,
          duration: 1.2,
          stagger: 0.04,          // 0.04s per character — staggered slide-up
          ease: 'power4.out',
        }, '-=0.5')
        .to('.hs-line-left',  { scaleX: 1, duration: 1.0, ease: 'expo.out' }, '-=0.6')
        .to('.hs-line-right', { scaleX: 1, duration: 1.0, ease: 'expo.out' }, '<')
        .to('.hs-sub',        { opacity: 1, y: 0, duration: 0.85 }, '-=0.55')
        .to('.hs-cta-wrap',   { opacity: 1, y: 0, duration: 0.75 }, '-=0.45')
        .to('.hs-pills',      { opacity: 1, y: 0, duration: 0.75 }, '-=0.45')
        .to('.hs-scroll-indicator', { opacity: 1, duration: 0.5 }, '-=0.2');

      timelines.push(tl);

      /* ── 5. Native scroll → bg scale scrub ────────────────────
         CSS position:sticky handles the pin.
         We calculate progress from the outer wrapper's rect.
         scrub lag replicated via requestAnimationFrame lerp.
      ─────────────────────────────────────────────────────────── */
      let currentP = 0;
      let targetP  = 0;
      let rafRunning = false;

      const lerp = (a, b, t) => a + (b - a) * t;

      const applyProgress = (p) => {
        const scaledP = 1 - Math.pow(1 - p, 3);          // cubic ease-out curve
        const scale   = 1 + scaledP * 0.22;               // 1.0 → 1.22

        if (bgRef.current)
          bgRef.current.style.transform = `scale(${scale})`;

        if (overlayRef.current)
          overlayRef.current.style.opacity = 0.55 + scaledP * 0.28;

        if (smokeRef.current)
          smokeRef.current.style.opacity = scaledP * 0.7;

        if (contentRef.current)
          contentRef.current.style.opacity =
            p > 0.85 ? Math.max(0, 1 - ((p - 0.85) / 0.15)) : 1;
      };

      const rafLoop = () => {
        currentP = lerp(currentP, targetP, 0.07);   // 0.07 lerp ≅ 1.5s lag like scrub:1.5
        applyProgress(currentP);
        if (Math.abs(targetP - currentP) > 0.0003) {
          scrollRaf = requestAnimationFrame(rafLoop);
        } else {
          currentP = targetP;
          applyProgress(currentP);
          rafRunning = false;
        }
      };

      scrollHandler = () => {
        const outer = outerRef.current;
        if (!outer) return;
        const rect  = outer.getBoundingClientRect();
        const total = outer.offsetHeight - window.innerHeight;
        targetP = Math.max(0, Math.min(1, -rect.top / total));

        if (!rafRunning) {
          rafRunning = true;
          scrollRaf  = requestAnimationFrame(rafLoop);
        }
      };

      window.addEventListener('scroll', scrollHandler, { passive: true });
      scrollHandler(); // run once on mount to set initial state
    };

    init();

    return () => {
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
      if (scrollRaf)     cancelAnimationFrame(scrollRaf);
      timelines.forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Outer: gives the scroll distance for pinning ── */
        .hs-outer {
          position: relative;
          height: 250vh;
          font-family: 'Urbanist', 'Inter', sans-serif;
        }

        /* ── Sticky panel: stays while outer scrolls ── */
        .hs-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Background image: scales via scrub ── */
        .hs-bg {
          position: absolute;
          inset: -10%;          /* extra room for scale overflow */
          background: url('${BASE}/images/fd1.png') center center / cover no-repeat;
          transform-origin: center center;
          will-change: transform;
          z-index: 0;
        }

        /* ── Dark overlay ── */
        .hs-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            170deg,
            rgba(2, 6, 23, 0.82) 0%,
            rgba(2, 6, 23, 0.52) 45%,
            rgba(2, 6, 23, 0.80) 100%
          );
          will-change: opacity;
          z-index: 1;
        }

        /* ── Vignette edges (cinematic) ── */
        .hs-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 40%,
            rgba(2, 6, 23, 0.55) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* ── Smoke bar: top-fade darkening as scroll progresses ── */
        .hs-smoke {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 240px;
          background: linear-gradient(to bottom, rgba(2,6,23,0.9) 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          will-change: opacity;
        }

        /* ── Content block: centered, stays fixed during pin ── */
        .hs-content {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1100px;
          padding: 0 60px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          will-change: transform;
        }

        /* Brand tag */
        .hs-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          margin-bottom: 26px;
        }
        .hs-brand-line {
          width: 36px;
          height: 1px;
          background: rgba(255,255,255,0.4);
        }

        /* Decorative lines flanking heading */
        .hs-line-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 24px;
          margin-bottom: 20px;
        }
        .hs-line-left, .hs-line-right {
          flex: 1;
          max-width: 120px;
          height: 1px;
          background: rgba(255,255,255,0.25);
          will-change: transform;
        }
        .hs-line-diamond {
          width: 6px; height: 6px;
          background: #e8a945;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ─── HEADING — split text ─── */
        .hs-heading {
          font-size: clamp(48px, 7vw, 108px);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -2.5px;
          color: #ffffff;
          margin: 0 0 32px;
          word-break: keep-all;
          user-select: none;
          text-shadow:
            0 2px 40px rgba(0,0,0,0.5),
            0 1px 3px rgba(0,0,0,0.3);
        }

        /* Individual char: hidden by overflow until animated */
        .hs-word {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          margin-right: 0.28em;
        }
        .hs-char {
          display: inline-block;
          will-change: transform, opacity;
        }

        /* Gradient on highlight word */
        .hs-heading-accent {
          background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Subtitle */
        .hs-sub {
          font-size: clamp(15px, 1.6vw, 18px);
          line-height: 1.7;
          color: rgba(255,255,255,0.68);
          max-width: 560px;
          margin-bottom: 44px;
          font-weight: 400;
        }

        /* CTA buttons */
        .hs-cta-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 60px;
        }
        .hs-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg, #f59e0b, #f97316);
          color: #0f172a;
          font-size: 14px;
          font-weight: 700;
          border-radius: 60px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
          box-shadow: 0 8px 32px rgba(249,115,22,0.4);
        }
        .hs-btn-primary:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 16px 48px rgba(249,115,22,0.5);
          color: #0f172a;
        }
        .hs-btn-primary svg { transition: transform 0.3s ease; }
        .hs-btn-primary:hover svg { transform: translateX(5px); }

        .hs-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          border-radius: 60px;
          border: 1px solid rgba(255,255,255,0.2);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: background 0.3s ease, border-color 0.3s ease,
                      transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .hs-btn-outline:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-4px);
          color: #fff;
        }

        /* ─── Stats pills ─── */
        .hs-pills {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          will-change: transform;
        }
        .hs-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 50px;
          color: #fff;
        }
        .hs-pill-num {
          font-size: 18px;
          font-weight: 800;
          color: #fbbf24;
          line-height: 1;
        }
        .hs-pill-label {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .hs-pill-sep {
          width: 1px; height: 28px;
          background: rgba(255,255,255,0.12);
        }

        /* ─── Scroll indicator ─── */
        .hs-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
          pointer-events: none;
        }
        .hs-scroll-text {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .hs-scroll-mouse {
          width: 22px; height: 34px;
          border: 2px solid rgba(255,255,255,0.25);
          border-radius: 12px;
          position: relative;
          display: flex;
          justify-content: center;
          padding-top: 5px;
        }
        .hs-scroll-wheel {
          width: 3px; height: 7px;
          background: rgba(255,255,255,0.5);
          border-radius: 2px;
          animation: hsWheelBounce 1.6s ease-in-out infinite;
        }
        @keyframes hsWheelBounce {
          0%,100% { opacity: 1; transform: translateY(0); }
          50%      { opacity: 0.2; transform: translateY(8px); }
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .hs-outer { height: 220vh; }
          .hs-content { padding: 0 24px; }
          .hs-heading { letter-spacing: -1.5px; }
          .hs-cta-wrap { flex-direction: column; width: 100%; }
          .hs-btn-primary, .hs-btn-outline {
            width: 100%; justify-content: center;
          }
          .hs-line-left, .hs-line-right { max-width: 60px; }
        }
      `}</style>

      {/* ── Outer scroll distance wrapper ── */}
      <div className="hs-outer" ref={outerRef}>

        {/* ── Sticky viewport panel ── */}
        <div className="hs-sticky" ref={stickyRef}>

          {/* Background image — scales on scrub */}
          <div className="hs-bg" ref={bgRef} aria-hidden="true" />

          {/* Dark gradient overlay — deepens on scrub */}
          <div className="hs-overlay" ref={overlayRef} aria-hidden="true" />

          {/* Cinematic vignette edges */}
          <div className="hs-vignette" aria-hidden="true" />

          {/* Top smoke bar — fades in on scroll */}
          <div className="hs-smoke" ref={smokeRef} aria-hidden="true" />

          {/* ── Text Content — centered, fixed during pin ── */}
          <div className="hs-content" ref={contentRef}>

            {/* Brand tag */}
            <div className="hs-brand">
              <div className="hs-brand-line" />
              Fahud Safety &amp; Technical Trading
              <div className="hs-brand-line" />
            </div>

            {/* Decorative line */}
            <div className="hs-line-wrap" aria-hidden="true">
              <div className="hs-line-left" />
              <div className="hs-line-diamond" />
              <div className="hs-line-right" />
            </div>

            {/*
              hs-heading text is split into character <span>s by JS.
              Do NOT put nested JSX here — the splitIntoCharSpans()
              function replaces innerHTML after mount.
            */}
            <h1 className="hs-heading" aria-label="Protecting Oman's Workforce">
              Protecting Oman's Workforce
            </h1>

            <p className="hs-sub">
              Premium industrial PPE, certified safety equipment and technical trading solutions.
              Engineered for every hazard — trusted by Oman's leading industries.
            </p>

            <div className="hs-cta-wrap">
              <Link href="/services" className="hs-btn-primary" id="hs-explore-btn">
                Explore Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/contact" className="hs-btn-outline" id="hs-contact-btn">
                Get a Quote
              </Link>
            </div>

            {/* Stats pills */}
            <div className="hs-pills" ref={pillsRef}>
              <div className="hs-pill">
                <span className="hs-pill-num">500+</span>
                <span className="hs-pill-label">Products</span>
              </div>
              <div className="hs-pill-sep" />
              <div className="hs-pill">
                <span className="hs-pill-num">12+</span>
                <span className="hs-pill-label">Years</span>
              </div>
              <div className="hs-pill-sep" />
              <div className="hs-pill">
                <span className="hs-pill-num">98%</span>
                <span className="hs-pill-label">Satisfaction</span>
              </div>
              <div className="hs-pill-sep" />
              <div className="hs-pill">
                <span className="hs-pill-num">ISO</span>
                <span className="hs-pill-label">Certified</span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hs-scroll-indicator" aria-hidden="true">
            <span className="hs-scroll-text">Scroll</span>
            <div className="hs-scroll-mouse">
              <div className="hs-scroll-wheel" />
            </div>
          </div>

        </div>{/* /hs-sticky */}
      </div>{/* /hs-outer */}
    </>
  );
}
