"use client";

import { useEffect, useRef } from "react";

const works = [
  {
    industry: "医療 × SaaS",
    challenge: "医師と患者のコミュニケーションギャップ",
    solution:
      "診療記録をビジュアル化するダッシュボードのUI設計。情報の優先順位を再設計し、診療時間を20%短縮。",
    tag: "UI/UXデザイン",
  },
  {
    industry: "HR × スタートアップ",
    challenge: "採用プロセスの属人化と離脱率の高さ",
    solution:
      "求職者体験をゼロから再設計。ステップを7→4に削減し、エントリー完了率が1.8倍に向上。",
    tag: "UXリサーチ・設計",
  },
  {
    industry: "EC × D2C",
    challenge: "ブランド世界観とUI品質のギャップ",
    solution:
      "ブランドガイドラインに基づいたデザインシステムを構築。開発工数を40%削減し、一貫性のある体験を実現。",
    tag: "デザインシステム",
  },
];

function WorkCard({
  item,
  index,
}: {
  item: (typeof works)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-8");
          }, index * 150);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white border border-border p-8 sm:p-10 cursor-default hover:shadow-sm transition-shadow"
    >
      <span className="inline-block text-xs tracking-widest text-accent font-sans font-medium border border-accent px-3 py-1 mb-6">
        {item.tag}
      </span>
      <p className="text-xs tracking-[0.2em] text-muted font-sans mb-3 uppercase">
        {item.industry}
      </p>
      <h3 className="text-base sm:text-lg font-serif font-semibold text-primary mb-4 leading-snug">
        {item.challenge}
      </h3>
      <div className="w-8 h-px bg-border mb-4" />
      <p className="text-sm text-secondary leading-relaxed font-sans font-light">
        {item.solution}
      </p>
    </div>
  );
}

export default function Works() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          el.classList.remove("opacity-0", "translate-y-4");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="works" className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div
          ref={headingRef}
          className="opacity-0 translate-y-4 transition-all duration-700 ease-out mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-muted mb-4 font-sans uppercase">
            Works
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary">
            支援実績
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((item, i) => (
            <WorkCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
