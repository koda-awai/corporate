import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-ink py-28 sm:py-40 px-6 sm:px-10 overflow-hidden">
      {/* 背景の巨大アウトラインタイポ */}
      <p
        aria-hidden="true"
        className="text-outline-light absolute -top-6 right-0 font-serif font-semibold text-[20vw] sm:text-[12rem] leading-none whitespace-nowrap select-none pointer-events-none"
      >
        AWAI
      </p>

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <p className="flex items-center gap-4 text-xs tracking-[0.3em] text-accent mb-6 font-sans font-medium uppercase">
            <span aria-hidden="true" className="inline-block w-10 h-px bg-accent" />
            Philosophy
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-background leading-[1.5] mb-16">
            淡きあわいに、
            <br className="sm:hidden" />
            本質は宿る<span className="text-accent">。</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal delay={100}>
            <p className="text-sm sm:text-base text-background/70 leading-loose font-sans font-light mb-8">
              白と黒の間。言語と非言語の間。思いと形の間——
              <br />
              「淡間（あわま）」という社名は、「あわい（淡い・間）」という言葉から生まれました。
            </p>
            <p className="text-sm sm:text-base text-background/70 leading-loose font-sans font-light">
              二つのものの境界には、どちらでもないグラデーションが広がっています。
              私たちはその「あわい」に立ち、クライアントの思いに耳を澄ませ、
              まだ言葉にならない本質を形に変えていきます。
            </p>
          </Reveal>

          {/* 「あわい」のグラデーション帯：思い（生成り）から形（墨）へ */}
          <Reveal delay={200}>
            <div aria-hidden="true" className="select-none">
              <p className="text-center text-xs tracking-[0.5em] text-background/50 font-serif mb-6">
                あわい
              </p>
              <div className="gradation-band h-20 sm:h-24 border border-background/10" />
              <div className="flex justify-between mt-5">
                <span className="text-xs tracking-[0.3em] text-background/60 font-serif">
                  思い
                </span>
                <span className="text-xs tracking-[0.3em] text-background/60 font-serif">
                  形
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
