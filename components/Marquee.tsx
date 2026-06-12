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
          className="flex items-center gap-10 px-5 text-sm sm:text-base tracking-[0.25em] font-sans font-light text-background/80 uppercase whitespace-nowrap"
        >
          {item}
          <span aria-hidden="true" className="text-accent text-xs">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="提供サービス"
      className="bg-primary py-5 overflow-hidden"
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
