import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-28 sm:py-40 px-6 sm:px-10 overflow-hidden">
      <Reveal>
        <div className="relative max-w-2xl mx-auto text-center">
          {/* 背景の巨大アウトラインタイポ */}
          <p
            aria-hidden="true"
            className="text-outline-light absolute -top-10 left-1/2 -translate-x-1/2 font-serif font-semibold text-[16vw] sm:text-[10rem] leading-none whitespace-nowrap select-none pointer-events-none"
          >
            CONTACT
          </p>
          <p className="relative flex items-center justify-center gap-4 text-xs tracking-[0.3em] text-accent mb-8 font-sans font-medium uppercase">
            <span aria-hidden="true" className="inline-block w-10 h-px bg-accent" />
            Contact
            <span aria-hidden="true" className="inline-block w-10 h-px bg-accent" />
          </p>
          <h2 className="relative text-3xl sm:text-5xl font-serif font-semibold text-background leading-[1.5] mb-8">
            まずはお気軽に、
            <br />
            ご連絡ください<span className="text-accent">。</span>
          </h2>
          <p className="text-sm sm:text-base text-background/60 font-sans font-light leading-loose mb-14">
            プロジェクトの相談から、ちょっとした疑問まで。
            <br className="hidden sm:block" />
            お気軽にフォームまたはSNSよりご連絡ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.google.com/dummy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep group inline-flex items-center justify-center gap-3 px-10 py-4 bg-background text-primary text-sm tracking-[0.2em] font-sans font-medium hover:text-background transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              style={{ "--sweep-color": "#B33A1C" } as React.CSSProperties}
            >
              フォームで相談する
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <a
              href="https://x.com/dummy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep inline-flex items-center justify-center gap-2 px-10 py-4 border border-background/30 text-background text-sm tracking-[0.2em] font-sans font-medium hover:border-background transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              style={{ "--sweep-color": "rgba(245, 242, 234, 0.12)" } as React.CSSProperties}
              aria-label="X（旧Twitter）でフォローする"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-4 h-4 fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X でつながる
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
