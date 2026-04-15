'use client';

import { Activity, Heart, Zap } from 'lucide-react';

export default function AboutSectionNew() {
  return (
    <>
      <section id="about">
        <div id="gradient" />

        <div id="watermark" aria-hidden="true">
          <span id="watermarkText">Fahud</span>
        </div>

        <div id="content">
          <div id="left">
            <h1 id="title">
              About <span id="cyan">FAHUD</span> Safety and
              <br id="desktopBreak" /> Technical Trading Oman{' '}
              <span id="titleHighlight">
                {/* <span id="white">Pulz</span> */}
                
              </span>
            </h1>

            <div id="buttons">
              {/* <button id="btn_btnPrimary">Learn More</button> */}
              <button id="btn_btnSecondary">Learn More</button>
            </div>
          </div>

          <div id="center" className='twm-category-carousal-mid-media'>
            <div id="deviceWrapper">
              <div id="deviceGlow" />
              <img
                src="/images/171.webp"
                alt="PulzCAD wearable ECG device"
                id="deviceImage"
              />
            </div>
          </div>

          <div id="right">
            <p id="description">
              FAHUD Safety & Technical Trading Oman is a trusted provider of industrial safety products and PPE equipment, serving industries like oil & gas, 
              mining, and construction. We deliver high-quality, durable, and internationally compliant safety solutions designed to protect workers and 
              improve workplace efficiency.
            </p>
            <p id="description">
              Our range includes safety signs, harnesses, and protective gear, offered at competitive prices without compromising on quality. We are committed 
              to helping businesses create safer and more productive work environments.
            </p>

            {/* <div id="featureCards">
              <FeatureCard icon={<Activity size={18} />} title="AI-Driven Analytics" desc="Advanced algorithms with superior diagnostic accuracy" />
              <FeatureCard icon={<Heart size={18} />} title="2-Lead ECG Wearable" desc="Next-generation portable cardiac monitoring" />
              <FeatureCard icon={<Zap size={18} />} title="Real-Time Analysis" desc="Instant insights during stress testing sessions" />
            </div> */}
          </div>
        </div>

        {/* <footer id="footer">
          <div id="statsGrid">
            <Stat value="98%" label="Sensitivity" />
            <Stat value="2-Lead" label="ECG System" />
            <Stat value="AI" label="Powered" />
            <Stat value="FDA" label="Cleared" />
          </div>
        </footer> */}
      </section>

      <style >{`
        #about {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding:0 50px;
        }

        #gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0a1e2eff 0%, #0d1f35ff 30%, #0b212eff 60%, #092624 100%);
        }

        #watermark {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          user-select: none;
        }

        #watermarkText {
          font-weight: 900;
          letter-spacing: 0.10em;
          text-align: center;
          line-height: 1;
          color: rgba(0, 180, 160, 0.07);
          white-space: nowrap;
          font-size: clamp(80px, 18vw, 260px);
        }

        #content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          min-height: 100vh;
          padding: 3rem 1.5rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          #content {
            flex-direction: row;
            align-items: stretch;
            padding: 0;
          }
        }

        #left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          padding-top: 2rem;
        }

        @media (min-width: 1024px) {
          #left {
            width: 42%;
            padding-top: 0;
          }
        }

        @media (min-width: 1280px) {
          #left {
            width: 40%;
          }
        }

        #title {
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #e8f4f2;
          font-size: clamp(28px, 4vw, 56px);
        }

        #desktopBreak {
          display: none;
        }

        @media (min-width: 640px) {
          #desktopBreak {
            display: block;
          }
        }

        #titleHighlight {
          display: block;
          margin-top: 0.25rem;
        }

        #white {
          color: #e8f4f2;
          font-weight: 800;
        }

        #cyan {
          color: #F5B82F;
          font-weight: 800;
        }

        #tm {
          font-size: 0.45em;
          vertical-align: super;
          color: #00e5cc;
          font-weight: 700;
          margin-left: 2px;
        }

        #buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        #btn_btnPrimary {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #F5B82F;
          color: #0a2e2a;
        }

        #btn_btnPrimary:hover {
          transform: scale(1.05);
        }

        #btn_btnPrimary:active {
          transform: scale(0.95);
        }

        #btn_btnSecondary {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          background: rgba(255, 255, 255, 0.08);
          color: #e8f4f2;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        #btn_btnSecondary:hover {
          transform: scale(1.05);
        }

        #btn_btnSecondary:active {
          transform: scale(0.95);
        }

        #center {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        @media (max-width: 1023px) {
          #center {
            width: 100%;
          }
        }

        #deviceWrapper {
          position: relative;
          width: clamp(260px, 38vw, 520px);
          aspect-ratio: 1;
        }

        #deviceGlow {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(0, 229, 204, 0.12) 0%, transparent 70%);
          transform: scale(1.3);
        }

        #deviceImage {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          transform: rotate(-12deg) perspective(800px) rotateY(-8deg);
          filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 40px rgba(0, 229, 204, 0.2));
        }

        #right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }

        @media (min-width: 1024px) {
          #right {
            width: 30%;
            padding-left: 2rem;
          }
        }

        @media (min-width: 1280px) {
          #right {
            width: 28%;
            padding-left: 3rem;
          }
        }

        #description {
          line-height: 1.75;
          margin-bottom: 2rem;
          color: rgba(232, 244, 242, 0.75);
          font-size: clamp(13px, 1.1vw, 15px);
        }

        #featureCards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .featureCard {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .featureCard:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .featureIcon {
          flex-shrink: 0;
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: rgba(0, 229, 204, 0.12);
          color: #00e5cc;
          margin-top: 0.125rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .featureText {
          flex: 1;
        }

        .featureTitle {
          font-weight: 600;
          font-size: 0.875rem;
          color: #e8f4f2;
          margin-bottom: 0.125rem;
        }

        .featureDesc {
          font-size: 0.75rem;
          color: rgba(232, 244, 242, 0.5);
        }

        #footer {
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
        }

        @media (min-width: 1024px) {
          #footer {
            padding: 1.5rem 4rem;
          }
        }

        @media (min-width: 1280px) {
          #footer {
            padding: 1.5rem 6rem;
          }
        }

        #statsGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 640px) {
          #statsGrid {
            justify-content: flex-start;
          }
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 640px) {
          .stat {
            align-items: flex-start;
          }
        }

        .statValue {
          font-weight: 700;
          font-size: 1.125rem;
          color: #00e5cc;
        }

        .statLabel {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(232, 244, 242, 0.4);
        }
      `}</style>
    </>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="featureCard">
      <div className="featureIcon">{icon}</div>
      <div className="featureText">
        <p className="featureTitle">{title}</p>
        <p className="featureDesc">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <span className="statValue">{value}</span>
      <span className="statLabel">{label}</span>
    </div>
  );
}