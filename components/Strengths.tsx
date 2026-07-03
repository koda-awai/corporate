import Reveal from "./Reveal";

const strengths = [
  {
    label: "Why first",
    title: "まず、なぜから。",
    description:
      '"どう作るか"より"なぜ作るか"から始めます。課題の本質を掴んでから、デザインに入ります。',
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
    <section id="strengths" className="py-28 sm:py-40 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-20">
          <p className="flex items-center gap-4 text-xs tracking-[0.3em] text-accent mb-6 font-sans font-medium uppercase">
            <span aria-hidden="true" className="inline-block w-10 h-px bg-accent" />
            Strengths
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-primary leading-tight">
            選ばれる3つの理由
          </h2>
        </Reveal>

        <div>
          {strengths.map((item, i) => (
            <Reveal key={item.label} delay={i * 120}>
              <div className="group relative border-t border-border last:border-b py-12 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                {/* ホバーで上罫線がアクセント色に伸びる */}
                <span
                  aria-hidden="true"
                  className="absolute top-[-1px] left-0 h-[2px] w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
                />
                <p
                  aria-hidden="true"
                  className="md:col-span-2 font-serif text-6xl sm:text-7xl font-semibold leading-none text-primary/10 transition-colors duration-500 group-hover:text-accent/40"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="md:col-span-4">
                  <p className="text-xs tracking-[0.25em] text-accent font-sans font-medium mb-3 uppercase">
                    {item.label}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-primary leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="md:col-span-6 text-sm sm:text-base text-secondary leading-loose font-sans font-light md:pt-2">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
