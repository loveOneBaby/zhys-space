import { useEffect, useRef } from 'react';

const GHOST_COUNT = 9;

export default function GhostCursor() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === 'undefined') return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isTouch) return undefined;

    document.body.classList.add('custom-cursor-enabled');

    const nodes = [...root.querySelectorAll('.ghost-cursor__dot')];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const points = nodes.map(() => ({ ...mouse }));
    let raf = 0;

    const move = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const animate = () => {
      let targetX = mouse.x;
      let targetY = mouse.y;

      points.forEach((point, index) => {
        const speed = 0.24 - index * 0.012;
        point.x += (targetX - point.x) * speed;
        point.y += (targetY - point.y) * speed;
        targetX = point.x;
        targetY = point.y;

        const scale = 1 - index * 0.055;
        const opacity = 0.82 - index * 0.075;
        const blur = index * 0.2;
        nodes[index].style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        nodes[index].style.opacity = Math.max(opacity, 0.08).toFixed(2);
        nodes[index].style.filter = `blur(${blur}px)`;
      });

      raf = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', move, { passive: true });
    raf = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', move);
      window.cancelAnimationFrame(raf);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  return (
    <div ref={rootRef} className="ghost-cursor" aria-hidden="true">
      {Array.from({ length: GHOST_COUNT }).map((_, index) => (
        <span key={index} className="ghost-cursor__dot" />
      ))}
    </div>
  );
}
