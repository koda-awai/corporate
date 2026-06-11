import FadeIn from "./FadeIn";

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
    <section id="works" className="section-divider scroll-mt-16 py-32 md:py-40 px-6">
      <div className="max-w-content mx-auto">
        <FadeIn className="mb-20">
          <p className="font-sans text-xs tracking-[0.2em] text-secondary mb-5 uppercase">
            Works
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
            支援実績
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((item, i) => (
            <FadeIn
              key={item.industry}
              delay={i * 150}
              className="bg-white/60 border border-border p-8 sm:p-10"
            >
              <span className="inline-block font-sans text-xs tracking-[0.1em] text-secondary border border-border px-3 py-1 mb-8">
                {item.tag}
              </span>
              <p className="font-sans text-xs tracking-[0.2em] text-secondary mb-4">
                {item.industry}
              </p>
              <h3 className="font-serif text-lg font-medium text-foreground mb-5 leading-relaxed">
                {item.challenge}
              </h3>
              <div className="w-8 h-px bg-foreground/20 mb-5" aria-hidden="true" />
              <p className="text-[15px] text-secondary leading-[1.8]">{item.solution}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
