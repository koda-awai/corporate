"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // パーティクル：20〜30個・ゆっくり漂う・マウス非反応
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    setSize();

    const resizeObserver = new ResizeObserver(setSize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.15 + 0.15,
    }));

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 26, 26, ${p.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="top"
      className="hero-grid relative min-h-screen flex flex-col items-center justify-center px-6 pt-16"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto text-center animate-fade-in-up">
        <p className="font-sans text-sm tracking-[0.3em] text-secondary mb-10 uppercase">
          Awama Inc.
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-snug mb-8 tracking-[0.06em]">
          あわい、から始める。
        </h1>
        <p className="text-base sm:text-lg text-secondary leading-[1.7] mb-14">
          思いと形の間に入り、本質から作る。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-foreground text-background text-sm tracking-[0.15em] hover:opacity-80 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            お問い合わせ
          </a>
          <a
            href="#works"
            className="inline-block px-10 py-4 border border-foreground text-foreground text-sm tracking-[0.15em] hover:bg-foreground hover:text-background transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            実績を見る
          </a>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] text-secondary uppercase">
          Scroll
        </span>
        <div className="w-px h-14 bg-foreground/20" />
      </div>
    </section>
  );
}
