"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#strengths", label: "強み" },
  { href: "#works", label: "実績" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // メニュー表示中は背景スクロールを止める
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav
        className="max-w-content mx-auto flex items-center justify-between px-6 h-16"
        aria-label="メインナビゲーション"
      >
        <a
          href="#top"
          className="font-serif text-lg text-foreground tracking-[0.2em] hover:opacity-60 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          淡間
        </a>

        {/* PC ナビ */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-secondary hover:text-foreground transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* SP ハンバーガー */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* SP メニュー */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md"
        >
          <ul className="flex flex-col items-center gap-10 pt-20">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-xl text-foreground tracking-[0.1em] hover:opacity-60 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
