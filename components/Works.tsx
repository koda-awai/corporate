import Reveal from "./Reveal";

const works = [
  {
    industry: "医療 × SaaS",
    challenge: "医師と患者のコミュニケーションギャップ",
    solution:
      "診療記録をビジュアル化するダッシュボードのUI設計。情報の優先順位を再設計し、診療時間を20%短縮。",
    tag: "UI/UXデザイン",
  },
  {
    industry: "HR × スタートアップ",
    challenge: "採用プロセスの属人化と離脱率の高さ",
    solution:
      "求職者体験をゼロから再設計。ステップを7→4に削減し、エントリー完了率が1.8倍に向上。",
    tag: "UXリサーチ・設計",
  },
  {
    industry: "EC × D2C",
    challenge: "ブランド世界観とUI品質のギャップ",
    solution:
      "ブランドガイドラインに基づいたデザインシステムを構築。開発工数を40%削減し、一貫性のある体験を実現。",
    tag: "デザインシステム",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-28 sm:py-40 px-6 sm:px-10 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-20">
          <p className="flex items-center gap-4 text-xs tracking-[0.3em] text-accent mb-6 font-sans font-medium uppercase">
            <span aria-hidden="true" className="inline-block w-10 h-px bg-accent" />
            Works
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-primary leading-tight">
            支援実績
          </h2>
        </Reveal>

        <div>
          {works.map((item, i) => (
            <Reveal key={item.industry} delay={i * 120}>
              <div className="group relative border-t border-border last:border-b py-12 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 transition-colors duration-500 hover:bg-background/60">
                <span
                  aria-hidden="true"
                  className="absolute top-[-1px] left-0 h-[2px] w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
                />
                <div className="md:col-span-3">
                  <span className="inline-block text-[11px] tracking-[0.2em] text-accent font-sans font-medium border border-accent/60 px-3 py-1.5 mb-4 transition-colors duration-300 group-hover:bg-accent group-hover:text-background">
                    {item.tag}
                  </span>
                  <p className="text-xs tracking-[0.2em] text-muted font-sans uppercase">
                    {item.industry}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-primary mb-4 leading-relaxed">
                    {item.challenge}
                  </h3>
                  <div className="w-8 h-px bg-accent transition-all duration-500 ease-out group-hover:w-16 mb-5" />
                  <p className="text-sm sm:text-base text-secondary leading-loose font-sans font-light max-w-2xl">
                    {item.solution}
                  </p>
                </div>
                <p
                  aria-hidden="true"
                  className="hidden md:block md:col-span-1 font-serif text-5xl font-semibold leading-none text-primary/10 text-right transition-colors duration-500 group-hover:text-accent/40"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
