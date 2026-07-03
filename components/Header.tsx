"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#philosophy", label: "理念" },
  { href: "#strengths", label: "強み" },
  { href: "#works", label: "実績" },
  { href: "#about", label: "私たち" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <a
          href="#"
          className="group flex items-baseline gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="font-serif text-lg font-semibold text-primary tracking-[0.2em] group-hover:opacity-70 transition-opacity duration-200">
            淡間
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] text-muted font-sans uppercase">
            Awama Inc.
          </span>
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline text-xs tracking-[0.2em] text-secondary hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none font-sans"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-sweep inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary text-xs tracking-[0.2em] font-sans font-medium hover:text-background transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{ "--sweep-color": "#1B1B20" } as React.CSSProperties}
          >
            お問い合わせ
          </a>
        </div>
      </nav>
    </header>
  );
}
