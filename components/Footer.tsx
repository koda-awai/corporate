export default function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-10 bg-ink border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="flex items-baseline gap-3">
          <span className="font-serif text-sm text-background/70 tracking-[0.2em]">
            淡間
          </span>
          <span className="text-[10px] tracking-[0.3em] text-background/40 font-sans uppercase">
            Awama Inc.
          </span>
        </p>
        <p className="text-xs text-background/40 font-sans font-light tracking-wide">
          &copy; {new Date().getFullYear()} Awama Inc. All rights reserved.
        </p>
        <a
          href="#"
          className="link-underline text-[10px] tracking-[0.3em] text-background/50 hover:text-background/80 transition-colors duration-200 font-sans uppercase"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
