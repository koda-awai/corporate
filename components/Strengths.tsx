"use client";

import { useEffect, useRef } from "react";

const strengths = [
  {
    label: "Why first",
    title: "まず、なぜから。",
    description:
      '"どう作るか"より"なぜ作るか"から始めます。課題の本質を掴んでから、デザインに入ります。',
  },
  {
    label: "Fast Delivery",
    title: "最初の形を、早く。",
    description:
      "最初のドラフトは3営業日以内。無駄なMtgを減らし、早く形にして議論します。",
  },
  {
    label: "Cross Insight",
    title: "業界を越えた視点。",
    description:
      "複数のスタートアップを同時に支援してきた経験から、業界を超えた視点を持ち込みます。",
  },
];

function StrengthCard({
  item,
  index,
}: {
  item: (typeof strengths)[0];
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out border-t border-border pt-10 pb-4"
    >
      <p className="text-xs tracking-[0.25em] text-accent font-sans font-medium mb-4 uppercase">
        {item.label}
      </p>
      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-primary mb-4 leading-snug">
        {item.title}
      </h3>
      <p className="text-sm sm:text-base text-secondary leading-relaxed font-sans font-light max-w-sm">
        {item.description}
      </p>
    </div>
  );
}

export default function Strengths() {
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
    <section id="strengths" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          ref={headingRef}
          className="opacity-0 translate-y-4 transition-all duration-700 ease-out mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-muted mb-4 font-sans uppercase">
            Strengths
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary">
            選ばれる3つの理由
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {strengths.map((item, i) => (
            <StrengthCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
