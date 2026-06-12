"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav
        className={`max-w-5xl mx-auto flex items-center justify-between px-6 bg-background/90 backdrop-blur-sm border border-border transition-all duration-300 ${
          scrolled ? "py-3 shadow-[0_8px_30px_rgba(15,23,42,0.08)]" : "py-4"
        }`}
      >
        <a
          href="#"
          className="font-serif text-base font-semibold text-primary tracking-wide hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          淡間
        </a>
        <ul className="hidden sm:flex items-center gap-8">
          {[
            { href: "#strengths", label: "強み" },
            { href: "#works", label: "実績" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "お問い合わせ" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline text-xs tracking-[0.15em] text-secondary hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none font-sans"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
