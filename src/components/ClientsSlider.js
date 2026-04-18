"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ClientsSlider.module.css';

gsap.registerPlugin(ScrollTrigger);

const defaultImages = [
  "images/client-logo/dark/175.webp",
  "images/client-logo/dark/176.webp",
  "images/client-logo/dark/177.webp",
  "images/client-logo/dark/178.webp",
  "images/client-logo/dark/179.webp",
  "images/client-logo/dark/180.webp",
  "images/client-logo/dark/181.webp",
  "images/client-logo/dark/182.webp",
  "images/client-logo/dark/183.webp",
  "images/client-logo/dark/184.webp",
  "images/client-logo/dark/185.webp",
  "images/client-logo/dark/186.webp",
  "images/client-logo/dark/187.webp",
  "images/client-logo/dark/188.webp",
  "images/client-logo/dark/189.webp",
];

// Reusable TopSlider mapping logic
const TopSlider = ({ items }) => {
  // To ensure the gap is completely handled by -50% translateX without jumping,
  // we must double the array. For larger screens and smaller items, quadrupling is safer.
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.marqueeRow}>
      <div className={`${styles.marqueeTrack} ${styles.trackLeftToRight}`}>
        {duplicated.map((src, index) => (
          <div key={`top-${index}`} className={styles.card}>
            {/* If real images don't exist yet, we can use a placeholder for dev if needed, 
                 but strict instruction says use array provided */}
            <img src={src} alt={`Client item ${index}`} className={styles.cardImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Reusable BottomSlider mapping logic
const BottomSlider = ({ items }) => {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.marqueeRow}>
      <div className={`${styles.marqueeTrack} ${styles.trackRightToLeft}`}>
        {duplicated.map((src, index) => (
          <div key={`bottom-${index}`} className={styles.card}>
            <img src={src} alt={`Client item ${index}`} className={styles.cardImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ClientsSlider({ images = defaultImages }) {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Add subtle parallax effect scaling on the tilted wrapper while scrolling
      gsap.to(wrapperRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // when the top of section hits bottom of viewport
          end: "bottom top",
          scrub: 1
        },
        y: -100, // moves wrapper slightly up for a parallax feel
        ease: "none"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split images if necessary or just pass same images to both sliders
  // For distinct looking rows, reversing the secondary row works nicely
  const reversedImages = [...images].reverse();

  return (
    <section className={`${styles.sliderSection} `} ref={sectionRef}>
      <h2 className={`${styles.title} wt-title title_split_anim center`}>Our Clients</h2>

      <div className={styles.tiltedWrapper} ref={wrapperRef}>
        <TopSlider items={images} />
        <BottomSlider items={reversedImages} />
      </div>
    </section>
  );
}
