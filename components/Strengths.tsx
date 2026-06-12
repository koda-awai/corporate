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
      className="group relative opacity-0 translate-y-8 transition-all duration-700 ease-out border-t border-border pt-10 pb-4"
    >
      {/* ホバーで上罫線がアクセント色に伸びる */}
      <span
        aria-hidden="true"
        className="absolute top-[-1px] left-0 h-[2px] w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
      />
      <p
        aria-hidden="true"
        className="font-serif text-6xl sm:text-7xl font-bold leading-none text-primary/10 mb-6 transition-colors duration-500 group-hover:text-accent/30"
      >
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="text-xs tracking-[0.25em] text-accent font-sans font-medium mb-4 uppercase">
        {item.label}
      </p>
      <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-primary mb-4 leading-snug">
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
          <p className="flex items-center gap-4 text-xs tracking-[0.3em] text-accent mb-5 font-sans font-medium uppercase">
            <span aria-hidden="true" className="inline-block w-10 h-px bg-accent" />
            Strengths
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-primary leading-tight">
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
