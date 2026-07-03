const items = [
  "UI/UX Design",
  "Product Development",
  "Design System",
  "UX Research",
  "Brand Experience",
];

export default function Marquee() {
  // 半分スライドのループ用に同じ列を2回描画する
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-12 px-6 font-serif text-4xl sm:text-6xl font-medium text-primary/[0.14] tracking-wide whitespace-nowrap"
        >
          {item}
          <span aria-hidden="true" className="text-accent/60 text-lg">
            ・
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="提供サービス"
      className="border-y border-border py-10 sm:py-12 overflow-hidden"
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
