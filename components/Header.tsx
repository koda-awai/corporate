"use client";

export default function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4 bg-background/90 backdrop-blur-sm border border-border">
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
                className="text-xs tracking-[0.15em] text-secondary hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none focus:underline font-sans"
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
