"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // フェードインアニメーション
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          el.classList.remove("opacity-0", "translate-y-6");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // パーティクルアニメーション
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
      opacity: Math.random() * 0.15 + 0.12,
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
      ref={sectionRef}
      className="hero-grid relative min-h-screen flex flex-col items-center justify-center px-6 py-24 opacity-0 translate-y-6 transition-all duration-1000 ease-out"
    >
      {/* パーティクルCanvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center" style={{ zIndex: 10 }}>
        <p className="text-sm tracking-[0.3em] text-muted mb-8 font-sans font-light uppercase">
          Awama Inc.
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-primary leading-tight mb-8 tracking-wide">
          あわい、から始める。
        </h1>
        <p className="text-base sm:text-lg text-secondary leading-relaxed mb-12 max-w-xl mx-auto font-sans font-light">
          思いと形の間に入り、本質から作る。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-background text-sm tracking-widest font-sans font-medium hover:bg-secondary transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            お問い合わせ
          </a>
          <a
            href="#works"
            className="inline-block px-8 py-4 border border-primary text-primary text-sm tracking-widest font-sans font-medium hover:bg-primary hover:text-background transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            実績を見る
          </a>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        style={{ zIndex: 10 }}
      >
        <span className="text-xs tracking-widest font-sans text-secondary">scroll</span>
        <div className="w-px h-12 bg-secondary animate-pulse" />
      </div>
    </section>
  );
}
