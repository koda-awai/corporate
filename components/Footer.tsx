export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-primary border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-background/60 tracking-wide">
          株式会社淡間
        </p>
        <p className="text-xs text-background/40 font-sans font-light tracking-wide">
          &copy; {new Date().getFullYear()} Awama Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
