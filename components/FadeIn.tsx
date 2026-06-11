"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  /** ラップする要素（デフォルト: div） */
  as?: ElementType;
  /** 表示開始の遅延（ms） */
  delay?: number;
  className?: string;
  id?: string;
}

/**
 * IntersectionObserver による控えめなフェードイン。
 * prefers-reduced-motion 時は globals.css 側で transition が無効化される。
 */
export default function FadeIn({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  id,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-6");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`opacity-0 translate-y-6 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </Tag>
  );
}
