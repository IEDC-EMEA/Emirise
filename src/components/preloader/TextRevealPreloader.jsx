import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TextRevealPreloader = () => {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    const letters = letterRefs.current;
    const dots = dotsRef.current;

    gsap.set(letters, { y: 100, opacity: 0 });
    gsap.set(dots, { scale: 0, opacity: 0 });

    const tl = gsap.timeline({ repeat: -1 });

    // Animate letters
    tl.to(letters, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)"
    })
    .to(dots, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "back.out(2)"
    }, "-=0.3")
    .to(letters, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.in(1.7)",
      delay: 1
    })
    .to(dots, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: "back.in(2)"
    }, "-=0.3");
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center bg-[#5E0601] overflow-hidden">
      <div className="text-center">
        <h2 className="text-white text-5xl font-bold relative">
          {'EMIRISE'.split('').map((letter, index) => (
            <span
              key={index}
              ref={el => letterRefs.current[index] = el}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </h2>
        <div className="mt-8 space-x-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              ref={el => dotsRef.current[i] = el}
              className="inline-block w-4 h-4 bg-white rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextRevealPreloader;