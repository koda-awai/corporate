"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          el.classList.remove("opacity-0", "translate-y-6");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ink-wash relative min-h-screen flex items-center px-6 sm:px-10 pt-32 pb-24 overflow-hidden opacity-0 translate-y-6 transition-all duration-1000 ease-out"
    >
      {/* 背景の巨大な「間」：あわい＝間のシンボル */}
      <span
        aria-hidden="true"
        className="absolute -right-[8vw] top-1/2 -translate-y-1/2 font-serif font-medium text-[65vh] leading-none text-primary/[0.05] select-none pointer-events-none"
      >
        間
      </span>

      {/* 右端の縦書きコピー */}
      <p
        aria-hidden="true"
        className="text-vertical hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-xs tracking-[0.35em] text-muted font-serif select-none whitespace-nowrap"
      >
        白と黒の、そのあわいに立つ
      </p>

      <div className="relative max-w-6xl mx-auto w-full">
        <p className="flex items-center gap-4 text-[11px] sm:text-xs tracking-[0.4em] text-accent mb-10 font-sans font-medium uppercase">
          <span aria-hidden="true" className="inline-block w-12 h-px bg-accent" />
          Awama Inc. — UI/UX Design Studio
        </p>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-semibold text-primary leading-[1.25] tracking-wide mb-12">
          思いと形の、
          <br />
          あわいから<span className="text-accent">。</span>
        </h1>

        <p className="text-base sm:text-lg text-secondary leading-loose mb-14 max-w-xl font-sans font-light">
          「どう作るか」の前に、「なぜ作るか」を。
          <br />
          株式会社淡間は、思いと形のあいだに立ち、本質からプロダクトをデザインします。
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="btn-sweep group inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-background text-sm tracking-[0.2em] font-sans font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{ "--sweep-color": "#B33A1C" } as React.CSSProperties}
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
            className="btn-sweep group inline-flex items-center justify-center gap-3 px-10 py-4 border border-primary text-primary text-sm tracking-[0.2em] font-sans font-medium hover:text-background transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{ "--sweep-color": "#1B1B20" } as React.CSSProperties}
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
      <div className="absolute bottom-10 left-6 sm:left-10 flex items-center gap-3 opacity-50">
        <span className="text-[10px] tracking-[0.4em] font-sans text-secondary uppercase">
          Scroll
        </span>
        <div className="w-16 h-px bg-gradient-to-r from-secondary to-transparent" />
      </div>

      <p
        aria-hidden="true"
        className="absolute bottom-10 right-6 sm:right-10 text-[10px] tracking-[0.3em] text-muted font-sans uppercase opacity-60"
      >
        Standing in the in-between
      </p>
    </section>
  );
}
