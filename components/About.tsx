"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
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
      id="about"
      ref={ref}
      className="py-24 sm:py-32 px-6 opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-muted mb-4 font-sans uppercase">
          About
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary mb-16">
          私たちについて
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* プロフィール */}
          <div>
            <div className="relative w-24 h-24 mb-8 overflow-hidden bg-border">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                alt="小田 滉太 プロフィール写真"
                fill
                className="object-cover grayscale"
              />
            </div>
            <p className="text-xs tracking-[0.2em] text-muted font-sans mb-2 uppercase">
              Founder & Designer
            </p>
            <h3 className="text-xl font-serif font-semibold text-primary mb-1">
              小田 滉太
            </h3>
            <p className="text-sm text-muted font-sans mb-6">Kota Oda</p>
            <p className="text-sm sm:text-base text-secondary leading-relaxed font-sans font-light mb-4">
              複数のスタートアップにおいて、0→1フェーズのUI/UXデザイン・プロダクト開発を支援。
              サービスの本質的な価値を形にすることに特化し、思考と実装の両面から伴走します。
            </p>
            <p className="text-sm sm:text-base text-secondary leading-relaxed font-sans font-light">
              デザインを「見た目の仕事」ではなく「意思決定の仕事」と捉え、
              ビジネスとユーザーの間に立ちながら本質的な問いを投げかけ続けます。
            </p>
          </div>

          {/* 社名の由来 */}
          <div className="border-l border-border pl-12">
            <p className="text-xs tracking-[0.2em] text-muted font-sans mb-6 uppercase">
              Name Origin
            </p>
            <h3 className="text-xl font-serif font-semibold text-primary mb-6">
              「淡間」の由来
            </h3>
            <p className="text-sm sm:text-base text-secondary leading-relaxed font-sans font-light mb-6">
              「あわい（淡い・間）」という言葉から。
              <br />
              白と黒の間、言語と非言語の間、思いと形の間——
              <br />
              グラデーションの中にこそ、本質が宿る。
            </p>
            <p className="text-sm sm:text-base text-secondary leading-relaxed font-sans font-light">
              私たちはその「あわい」に立ち、
              クライアントの思いを形に変える存在でありたいと考えています。
            </p>
            <div className="mt-10 pt-10 border-t border-border">
              <p className="text-xs tracking-[0.2em] text-muted font-sans mb-2">
                所在地
              </p>
              <p className="text-sm text-secondary font-sans font-light">
                東京都渋谷区
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
