import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="section-divider scroll-mt-16 py-32 md:py-40 px-6">
      <div className="max-w-content mx-auto">
        <FadeIn className="mb-20">
          <p className="font-sans text-xs tracking-[0.2em] text-secondary mb-5 uppercase">
            About
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
            私たちについて
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-start">
          {/* 代表写真プレースホルダー */}
          <FadeIn>
            <div
              className="relative aspect-[3/4] w-full max-w-sm bg-foreground/[0.04] border border-border flex items-center justify-center"
              role="img"
              aria-label="代表 小田 滉太の写真（準備中）"
            >
              <span className="font-serif text-5xl text-foreground/15 select-none">淡</span>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-[0.3em] text-secondary/60 uppercase">
                Portrait
              </span>
            </div>
          </FadeIn>

          {/* プロフィール + 由来 */}
          <FadeIn delay={150}>
            <p className="font-sans text-xs tracking-[0.2em] text-secondary mb-3 uppercase">
              Founder &amp; Designer
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-1">
              小田 滉太
            </h3>
            <p className="font-sans text-sm text-secondary mb-8">Kota Oda</p>
            <p className="text-[15px] sm:text-base text-secondary leading-[1.9] mb-4">
              複数のスタートアップにおいて、0→1フェーズのUI/UXデザイン・プロダクト開発を支援。
              サービスの本質的な価値を形にすることに特化し、思考と実装の両面から伴走します。
            </p>
            <p className="text-[15px] sm:text-base text-secondary leading-[1.9]">
              デザインを「見た目の仕事」ではなく「意思決定の仕事」と捉え、
              ビジネスとユーザーの間に立ちながら本質的な問いを投げかけ続けます。
            </p>

            <div className="mt-14 pt-12 border-t border-border">
              <p className="font-sans text-xs tracking-[0.2em] text-secondary mb-6 uppercase">
                Name Origin
              </p>
              <h4 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-6">
                「淡間」の由来
              </h4>
              <p className="text-[15px] sm:text-base text-secondary leading-[1.9] mb-4">
                「あわい（淡い・間）」という言葉から。
                白と黒の間、言語と非言語の間、思いと形の間——
                グラデーションの中にこそ、本質が宿る。
              </p>
              <p className="text-[15px] sm:text-base text-secondary leading-[1.9]">
                私たちはその「あわい」に立ち、
                クライアントの思いを形に変える存在でありたいと考えています。
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
