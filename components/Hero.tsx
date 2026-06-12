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

      {/* 背景の巨大アウトラインタイポ */}
      <p
        aria-hidden="true"
        className="text-outline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] font-serif font-bold text-[18vw] leading-none tracking-tight whitespace-nowrap select-none pointer-events-none"
        style={{ zIndex: 1 }}
      >
        AWAMA
      </p>

      <div className="relative max-w-4xl mx-auto text-center" style={{ zIndex: 10 }}>
        <p className="text-xs sm:text-sm tracking-[0.4em] text-accent mb-8 font-sans font-medium uppercase">
          Awama Inc.
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-primary leading-[1.15] mb-10 tracking-wide">
          あわい、
          <br className="sm:hidden" />
          から始める<span className="text-accent">。</span>
        </h1>
        <p className="text-base sm:text-xl text-secondary leading-relaxed mb-14 max-w-xl mx-auto font-sans font-light">
          思いと形の間に入り、本質から作る。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn-sweep group inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-background text-sm tracking-widest font-sans font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            style={{ "--sweep-color": "#CA8A04" } as React.CSSProperties}
          >
            お問い合わせ
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            >
              →
            </span>
          </a>
          <a
            href="#works"
            className="btn-sweep group inline-flex items-center justify-center gap-3 px-10 py-4 border border-primary text-primary text-sm tracking-widest font-sans font-medium hover:text-background transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            style={{ "--sweep-color": "#0F172A" } as React.CSSProperties}
          >
            実績を見る
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            >
              →
            </span>
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
