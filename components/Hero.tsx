"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
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

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 opacity-0 translate-y-6 transition-all duration-1000 ease-out"
    >
      <div className="max-w-3xl mx-auto text-center">
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
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest font-sans text-secondary">scroll</span>
        <div className="w-px h-12 bg-secondary animate-pulse" />
      </div>
    </section>
  );
}
