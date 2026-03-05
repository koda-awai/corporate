"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
      id="contact"
      ref={ref}
      className="py-24 sm:py-32 px-6 bg-primary opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] text-accent mb-8 font-sans uppercase">
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-background mb-6">
          まずはお気軽にご連絡ください。
        </h2>
        <p className="text-sm sm:text-base text-background/60 font-sans font-light leading-relaxed mb-12">
          プロジェクトの相談から、ちょっとした疑問まで。
          <br className="hidden sm:block" />
          お気軽にフォームまたはSNSよりご連絡ください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.google.com/dummy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-background text-primary text-sm tracking-widest font-sans font-medium hover:bg-background/90 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-primary"
          >
            フォームで相談する
          </a>
          <a
            href="https://x.com/dummy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-background/30 text-background text-sm tracking-widest font-sans font-medium hover:border-background/60 hover:bg-background/10 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-primary"
            aria-label="X（旧Twitter）でフォローする"
          >
            {/* X (Twitter) SVG icon */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-4 h-4 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X でつながる
          </a>
        </div>
      </div>
    </section>
  );
}
