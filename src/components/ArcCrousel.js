"use client"
import {useEffect, useRef, useState} from 'react';

const people = [
  'https://static.wixstatic.com/media/cc918b_fbfe94e9314a42f4bb9d9a62357471cf~mv2.jpg/v1/fill/w_192,h_192,q_90,enc_avif,quality_auto/cc918b_fbfe94e9314a42f4bb9d9a62357471cf~mv2.jpg    ',
  'https://static.wixstatic.com/media/cc918b_c8a35a9890dc4b4cbeabd6a0ee21d0a9~mv2.png/v1/fill/w_335,h_150,q_90,enc_avif,quality_auto/cc918b_c8a35a9890dc4b4cbeabd6a0ee21d0a9~mv2.png',
  'https://static.wixstatic.com/media/cc918b_e056f048c4f44c0dbb78ca66c7a9851b~mv2.png/v1/fill/w_399,h_400,q_90,enc_avif,quality_auto/cc918b_e056f048c4f44c0dbb78ca66c7a9851b~mv2.png',
  'https://static.wixstatic.com/media/cc918b_7fbdbf29dfdd48e39fe1635ee9ea5b93~mv2.png/v1/fill/w_279,h_181,q_90,enc_avif,quality_auto/cc918b_7fbdbf29dfdd48e39fe1635ee9ea5b93~mv2.png',
  'https://static.wixstatic.com/media/cc918b_2541fb26e65c4af9bd46d8afd54cbf29~mv2.jpg/v1/fill/w_630,h_630,q_90,enc_avif,quality_auto/cc918b_2541fb26e65c4af9bd46d8afd54cbf29~mv2.jpg',
  'https://static.wixstatic.com/media/cc918b_33dc5e1c904844d1a1dd779fa9dd2a13~mv2.png/v1/fill/w_347,h_145,q_90,enc_avif,quality_auto/cc918b_33dc5e1c904844d1a1dd779fa9dd2a13~mv2.png',
  'https://static.wixstatic.com/media/cc918b_b29cf4535b7c449690a25604ff56ed47~mv2.jpg/v1/fill/w_410,h_410,q_90,enc_avif,quality_auto/cc918b_b29cf4535b7c449690a25604ff56ed47~mv2.jpg',
  'https://static.wixstatic.com/media/cc918b_95efc3ac497149c59cee34614be712a1~mv2.png/v1/fill/w_315,h_159,q_90,enc_avif,quality_auto/cc918b_95efc3ac497149c59cee34614be712a1~mv2.png',
];

const arcPositions = [
  { x: -318, y: 58, rotate: -24, scale: 0.68 },
  { x: -210, y: 30, rotate: -14, scale: 0.80 },
  { x: -105, y: 10, rotate: -6,  scale: 0.90 },
  { x: 0,    y: 0,  rotate: 0,   scale: 1.00 },
  { x: 105,  y: 10, rotate: 6,   scale: 0.90 },
  { x: 210,  y: 30, rotate: 14,  scale: 0.80 },
  { x: 318,  y: 58, rotate: 24,  scale: 0.68 },
];

const CARD_W = 128;
const CARD_H = 186;

export default function ArcCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % people.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getImageIndex = (position) => {
    return (currentIndex + position - 3 + people.length) % people.length;
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      setCurrentIndex((prev) => (prev + 1) % people.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentIndex((prev) => (prev - 1 + people.length) % people.length);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        ref={carouselRef}
        className="relative w-full"
        style={{ height: 290, marginTop: 8 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {arcPositions.map((pos, i) => {
          const imageIndex = getImageIndex(i);
          const img = people[imageIndex];
          const zIndex = 7 - Math.abs(i - 3);

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: 16,
                width: CARD_W,
                height: CARD_H,
                zIndex,
                borderRadius: 14,
                overflow: 'hidden',
                transform: `translateX(calc(-50% + ${pos.x}px)) translateY(${pos.y}px) rotate(${pos.rotate}deg) scale(${pos.scale})`,
                transformOrigin: 'center center',
                boxShadow:
                  i === 3
                    ? '0 8px 32px rgba(0,0,0,0.18)'
                    : '0 4px 18px rgba(0,0,0,0.13)',
                border: '2.5px solid rgba(255,255,255,0.72)',
                transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease',
              }}
            >
              <img
                src={`${img}?auto=compress&cs=tinysrgb&w=320`}
                alt={`Team member`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                }}
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mt-12 mb-4">
        {people.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              border: 'none',
              background: currentIndex === i ? '#1a1a1a' : '#d4d4d4',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
