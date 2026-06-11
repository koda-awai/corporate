import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-dark py-32 md:py-40 px-6">
      <FadeIn className="max-w-content mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.2em] text-white/50 mb-8 uppercase">
          Contact
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F8F7F4] mb-8">
          まずはお気軽にご連絡ください。
        </h2>
        <p className="text-[15px] sm:text-base text-white/70 leading-[1.9] mb-14">
          プロジェクトの相談から、ちょっとした疑問まで。
          <br className="hidden sm:block" />
          お気軽にフォームまたはSNSよりご連絡ください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.google.com/dummy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#F8F7F4] text-dark text-sm tracking-[0.15em] hover:opacity-80 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F7F4] focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            フォームで相談する
          </a>
          <a
            href="https://x.com/dummy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 border border-white/30 text-[#F8F7F4] text-sm tracking-[0.15em] hover:border-white/70 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F7F4] focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X でつながる
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
