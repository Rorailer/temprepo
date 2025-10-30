import React, { useRef, useState, useEffect } from 'react';
import anime from 'animejs';

const CardCarousel = ({ cards }) => {
  const [current, setCurrent] = useState(0);
  const cardRefs = useRef([]);
  const prevCurrent = useRef(current);

  // Animate card transitions with animejs
  useEffect(() => {
    if (prevCurrent.current !== current) {
      const prev = prevCurrent.current;
      const direction = current > prev ? 1 : -1;
      const prevCard = cardRefs.current[prev];
      const currCard = cardRefs.current[current];
      if (prevCard) {
        anime({
          targets: prevCard,
          translateX: direction * -100,
          opacity: 0.3,
          duration: 400,
          easing: 'easeInOutQuad',
        });
      }
      if (currCard) {
        anime({
          targets: currCard,
          translateX: [direction * 100, 0],
          opacity: [0.3, 1],
          scale: [0.92, 1],
          duration: 500,
          easing: 'easeInOutQuad',
        });
      }
      prevCurrent.current = current;
    }
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
  };

  // Touch/Swipe support
  let startX = null;
  const onTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    if (!startX) return;
    const diff = e.touches[0].clientX - startX;
    if (diff > 50) {
      handlePrev();
      startX = null;
    } else if (diff < -50) {
      handleNext();
      startX = null;
    }
  };
  const onTouchEnd = () => {
    startX = null;
  };

  // --- Custom Layout for 20% peeking cards ---
  // Main card: centered, full height
  // Next/Prev: scaled down, vertically centered, only 20% visible
  // All others: hidden
  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        className="relative w-full flex justify-center items-center overflow-x-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ minHeight: '340px', height: '340px' }}
      >
        {cards.map((card, idx) => {
          const offset = idx - current;
          let style =
            'absolute left-1/2 top-1/2 flex-shrink-0 transition-transform transition-opacity duration-500 ease-in-out';
          let transform = '';
          let z = 0;
          let opacity = 0;
          let width = '60%';
          let height = '100%';
          let pointerEvents = 'none';
          if (offset === 0) {
            // Main card
            transform = 'translate(-50%, -50%) scale(1)';
            z = 20;
            opacity = 1;
            width = '60%';
            height = '100%';
            pointerEvents = 'auto';
          } else if (offset === -1) {
            // Previous card, left, 20% visible, scaled down
            transform = 'translate(-90%, -50%) scale(0.8)';
            z = 10;
            opacity = 1;
            width = '20%';
            height = '70%';
          } else if (offset === 1) {
            // Next card, right, 20% visible, scaled down
            transform = 'translate(-10%, -50%) scale(0.8)';
            z = 10;
            opacity = 1;
            width = '20%';
            height = '70%';
          }
          return (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className={style}
              style={{
                transform,
                zIndex: z,
                opacity,
                width,
                height,
                pointerEvents,
                transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                boxShadow: offset === 0 ? '0 8px 32px 8px rgba(0,0,0,0.15)' : '0 2px 8px 2px rgba(0,0,0,0.08)',
                background: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                display: opacity === 0 ? 'none' : 'block',
              }}
            >
              {card}
            </div>
          );
        })}
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-4 justify-center">
        {cards.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === current ? 'bg-black' : 'bg-gray-300'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* Prev/Next buttons for desktop */}
      <button
        className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full shadow p-2 z-30"
        onClick={handlePrev}
        disabled={current === 0}
        aria-label="Previous"
      >
        <span className="text-2xl">&#8592;</span>
      </button>
      <button
        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full shadow p-2 z-30"
        onClick={handleNext}
        disabled={current === cards.length - 1}
        aria-label="Next"
      >
        <span className="text-2xl">&#8594;</span>
      </button>
    </div>
  );
};

export default CardCarousel;
