import FadeIn from "./FadeIn";

const strengths = [
  {
    label: "Why First",
    title: "まず、なぜから。",
    description:
      "“どう作るか”より“なぜ作るか”から始めます。課題の本質を掴んでから、デザインに入ります。",
  },
  {
    label: "Fast Delivery",
    title: "最初の形を、早く。",
    description:
      "最初のドラフトは3営業日以内。無駄なMtgを減らし、早く形にして議論します。",
  },
  {
    label: "Cross Insight",
    title: "業界を越えた視点。",
    description:
      "複数のスタートアップを同時に支援してきた経験から、業界を超えた視点を持ち込みます。",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="section-divider scroll-mt-16 py-32 md:py-40 px-6">
      <div className="max-w-content mx-auto">
        <FadeIn className="mb-20">
          <p className="font-sans text-xs tracking-[0.2em] text-secondary mb-5 uppercase">
            Strengths
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
            選ばれる3つの理由
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {strengths.map((item, i) => (
            <FadeIn key={item.label} delay={i * 150} className="border-t border-border pt-10">
              <p className="font-sans text-xs tracking-[0.2em] text-secondary mb-5 uppercase">
                {item.label}
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-5 leading-snug">
                {item.title}
              </h3>
              <p className="text-[15px] sm:text-base text-secondary leading-[1.8] max-w-sm">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
