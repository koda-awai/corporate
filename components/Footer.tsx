export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-10 px-6">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-white/70 tracking-[0.1em]">株式会社淡間</p>
        <p className="font-sans text-xs text-white/50 tracking-[0.05em]">
          &copy; 2026 Awama Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
