import Image from "next/image";
import Reveal from "./Reveal";

const companyInfo = [
  { label: "社名", value: "株式会社淡間（Awama Inc.）" },
  { label: "所在地", value: "東京都渋谷区" },
  {
    label: "事業内容",
    value: "UI/UXデザイン・プロダクト開発支援・デザインシステム構築",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-40 px-6 sm:px-10 overflow-hidden">
      {/* 右端の縦書き装飾 */}
      <p
        aria-hidden="true"
        className="text-vertical hidden lg:block absolute right-12 top-40 text-xs tracking-[0.5em] text-muted font-serif select-none"
      >
        あわいに立ち、形に変える
      </p>

      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-20">
          <p className="flex items-center gap-4 text-xs tracking-[0.3em] text-accent mb-6 font-sans font-medium uppercase">
            <span aria-hidden="true" className="inline-block w-10 h-px bg-accent" />
            About
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-primary leading-tight">
            私たちについて
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* プロフィール */}
          <Reveal delay={100}>
            <div className="group relative w-full max-w-[240px] aspect-[4/5] mb-10 overflow-hidden bg-border">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&q=80"
                alt="小田 滉太 プロフィール写真"
                fill
                sizes="240px"
                className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <p className="text-xs tracking-[0.25em] text-muted font-sans mb-3 uppercase">
              Founder & Designer
            </p>
            <h3 className="text-2xl font-serif font-semibold text-primary mb-1">
              小田 滉太
            </h3>
            <p className="text-sm text-muted font-sans mb-8">Kota Oda</p>
            <p className="text-sm sm:text-base text-secondary leading-loose font-sans font-light mb-5">
              複数のスタートアップにおいて、0→1フェーズのUI/UXデザイン・プロダクト開発を支援。
              サービスの本質的な価値を形にすることに特化し、思考と実装の両面から伴走します。
            </p>
            <p className="text-sm sm:text-base text-secondary leading-loose font-sans font-light">
              デザインを「見た目の仕事」ではなく「意思決定の仕事」と捉え、
              ビジネスとユーザーの間に立ちながら本質的な問いを投げかけ続けます。
            </p>
          </Reveal>

          {/* 会社概要 */}
          <Reveal delay={200}>
            <p className="text-xs tracking-[0.25em] text-muted font-sans mb-8 uppercase">
              Company Profile
            </p>
            <dl>
              {companyInfo.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[6rem_1fr] gap-6 border-t border-border last:border-b py-6"
                >
                  <dt className="text-xs tracking-[0.2em] text-muted font-sans pt-1">
                    {row.label}
                  </dt>
                  <dd className="text-sm sm:text-base text-secondary font-sans font-light leading-relaxed">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-14 border-l-2 border-accent/50 pl-8">
              <p className="text-xs tracking-[0.25em] text-muted font-sans mb-4 uppercase">
                Name Origin
              </p>
              <p className="font-serif text-lg sm:text-xl text-primary leading-loose">
                「淡間」は、「あわい（淡い・間）」から。
              </p>
              <p className="mt-4 text-sm sm:text-base text-secondary leading-loose font-sans font-light">
                グラデーションの中にこそ、本質が宿る。
                私たちはその「あわい」に立ち、クライアントの思いを形に変える存在でありたいと考えています。
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
