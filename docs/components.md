# コンポーネント仕様書

株式会社淡間 コーポレートサイト（Next.js + Tailwind CSS）のコンポーネント仕様書。

デザインコンセプトは社名の由来である**「あわい（淡い・間）」**。
墨（すみ）× 生成り（きなり）× 朱（しゅ）の和のパレットと、明朝体（Shippori Mincho）による
エディトリアルなレイアウトで「思いと形のあいだ」を表現する。

---

## 目次

1. [デザイントークン](#デザイントークン)
2. [Reveal（共通アニメーション）](#reveal共通アニメーション)
3. [Header](#header)
4. [Hero](#hero)
5. [Marquee](#marquee)
6. [Philosophy](#philosophy)
7. [Strengths](#strengths)
8. [Works](#works)
9. [About](#about)
10. [Contact](#contact)
11. [Footer](#footer)
12. [グローバルスタイル](#グローバルスタイル)

---

## デザイントークン

`tailwind.config.ts` で定義されたカスタムトークン。

### カラー

| トークン名    | 値          | 用途                                     |
| ------------ | ----------- | ---------------------------------------- |
| `primary`    | `#1B1B20`   | メインテキスト・ボタン（墨色）           |
| `secondary`  | `#4C4B50`   | サブテキスト                             |
| `accent`     | `#B33A1C`   | アクセント（朱色：ラベル・罫線・句点）   |
| `background` | `#F5F2EA`   | ページ背景色（生成り・和紙調）           |
| `foreground` | `#17171B`   | 最も濃いテキスト                         |
| `muted`      | `#8C8779`   | 補助テキスト・ラベル                     |
| `border`     | `#DFD9C9`   | ボーダー・区切り線                       |
| `ink`        | `#141419`   | ダークセクション背景（Philosophy/Contact/Footer） |
| `surface`    | `#FBF9F3`   | 明るめのセクション背景（Works）          |

### フォント

| トークン名 | フォントファミリー                        | 用途                         |
| --------- | ---------------------------------------- | ---------------------------- |
| `serif`   | Shippori Mincho, Noto Serif JP, serif    | 見出し（h1/h2/h3）・ロゴ・装飾 |
| `sans`    | Noto Sans JP, sans-serif                 | 本文・ラベル・ナビゲーション |

### アニメーション

| 名前           | 定義                                              |
| -------------- | ------------------------------------------------- |
| `fade-in`      | `opacity: 0 → 1`（0.8s ease-out）                |
| `fade-in-up`   | `opacity: 0, translateY(24px) → 1, 0`（0.8s）    |
| `marquee`      | `translateX(0 → -50%)`（40s linear infinite）    |

---

## Reveal（共通アニメーション）

**ファイル:** [components/Reveal.tsx](../components/Reveal.tsx)

スクロールで要素が表示領域に入ったらフェードイン＋スライドアップさせる共通ラッパー。
各セクションで重複していた IntersectionObserver 処理を集約したもの。

### Props

| 名前        | 型          | デフォルト | 説明                                   |
| ----------- | ----------- | ---------- | -------------------------------------- |
| `children`  | `ReactNode` | —          | 表示する要素                           |
| `delay`     | `number`    | `0`        | 表示開始の遅延（ms）。stagger 表示用   |
| `className` | `string`    | `""`       | 追加クラス                             |

### 挙動

- IntersectionObserver（`threshold: 0.12`）で `opacity-0 translate-y-8` → `opacity-100 translate-y-0`
- 一度表示されたら observer を破棄（再アニメーションしない）
- `transition-all duration-700 ease-out`

---

## Header

**ファイル:** [components/Header.tsx](../components/Header.tsx)

### 概要

画面上部に固定されるナビゲーションバー。初期状態は透明で、40px スクロールすると
生成り半透明＋ブラー＋下ボーダーに変化する。

### レイアウト

```
[ 淡間  AWAMA INC. ]  ......  [ 理念 | 強み | 実績 | 私たち ]  [ お問い合わせ ]
```

- ナビリンクは `sm:` 以上で表示（モバイルではロゴと CTA のみ）
- 「お問い合わせ」は枠線ボタン（`btn-sweep` で墨色に塗り込まれるホバー）

### ナビゲーション項目

| ラベル       | href          |
| ------------ | ------------- |
| 理念         | `#philosophy` |
| 強み         | `#strengths`  |
| 実績         | `#works`      |
| 私たち       | `#about`      |
| お問い合わせ | `#contact`（CTAボタン） |

---

## Hero

**ファイル:** [components/Hero.tsx](../components/Hero.tsx)

### 概要

全画面のファーストビュー。左寄せの大型明朝見出しによるエディトリアルなレイアウト。

### 構成要素

- 背景右側に巨大な「間」の文字（`text-primary/[0.05]`・装飾・`aria-hidden`）
- `.ink-wash`（墨のにじみ風ラジアルグラデーション）を背景に重ねる
- 右端に縦書きコピー「白と黒の、そのあわいに立つ」（`lg:` 以上で表示）
- 見出し:「思いと形の、あわいから。」（句点は朱色）
- CTA: お問い合わせ（墨塗り・朱スイープ）/ 実績を見る（枠線・墨スイープ）
- 左下にスクロールインジケーター、右下に英字コピー

### アニメーション

- IntersectionObserver（`threshold: 0.1`）でセクション全体がフェードイン（duration-1000）
- 旧デザインのパーティクル Canvas は廃止

---

## Marquee

**ファイル:** [components/Marquee.tsx](../components/Marquee.tsx)

### 概要

提供サービス名が流れるマーキー。上下ボーダーで挟んだ帯に、大型明朝の淡い文字
（`text-primary/[0.14]`）を無限ループで流す。

- 項目: UI/UX Design / Product Development / Design System / UX Research / Brand Experience
- 区切りは朱色の「・」
- 同じ列を2回描画し `-50%` までスライドしてループ（2列目は `aria-hidden`）

---

## Philosophy

**ファイル:** [components/Philosophy.tsx](../components/Philosophy.tsx)

### 概要

社名の由来と理念を語るダークセクション（`bg-ink`）。`id="philosophy"`。
旧デザインで About 内にあった「社名の由来」をブランドの核として独立させたもの。

### 構成要素

- 背景右上に巨大アウトラインタイポ「AWAI」（`.text-outline-light`）
- 見出し:「淡きあわいに、本質は宿る。」
- 左カラム: 理念テキスト（白と黒の間。言語と非言語の間。思いと形の間——）
- 右カラム: **グラデーション帯**（`.gradation-band`）
  - 生成り → 墨へのグラデーションで「思い」から「形」への遷移を視覚化
  - 上に「あわい」、下端に「思い」「形」のラベル（装飾・`aria-hidden`）

---

## Strengths

**ファイル:** [components/Strengths.tsx](../components/Strengths.tsx)

### 概要

強みを横組みの番号付きリスト（エディトリアル行）で表示。`id="strengths"`。

### レイアウト

```
── 01 ─────────────────────────────────────────
   01   WHY FIRST              "どう作るか"より"なぜ作るか"...
        まず、なぜから。
── 02 ─────────────────────────────────────────
   02   FAST DELIVERY          最初のドラフトは3営業日以内...
        最初の形を、早く。
```

- `md:` 以上で 12 カラムグリッド（番号 2 / 見出し 4 / 本文 6）
- 行は `border-t`（最終行のみ `border-b` も）で区切る
- ホバー: 上罫線が朱色に伸びる（`group-hover:w-full`）＋番号が朱色に変化
- `Reveal` の `delay={index * 120}` で stagger 表示

### データ

| label           | title              |
| --------------- | ------------------ |
| Why first       | まず、なぜから。   |
| Fast Delivery   | 最初の形を、早く。 |
| Cross Insight   | 業界を越えた視点。 |

---

## Works

**ファイル:** [components/Works.tsx](../components/Works.tsx)

### 概要

支援実績を横組みの行レイアウトで表示。`id="works"`。背景は `bg-surface` ＋上下ボーダー。

### レイアウト

- `md:` 以上で 12 カラムグリッド（タグ・業界 3 / 課題・解決策 8 / 番号 1）
- 行は `border-t` 区切り。ホバーで行背景がわずかに変化＋上罫線が朱色に伸びる
- タグはホバーで朱色に塗りつぶし反転

### データ

| tag                 | industry            | 主な成果               |
| ------------------- | ------------------- | ---------------------- |
| UI/UXデザイン       | 医療 × SaaS         | 診療時間 20% 短縮      |
| UXリサーチ・設計    | HR × スタートアップ | エントリー完了率 1.8倍 |
| デザインシステム    | EC × D2C            | 開発工数 40% 削減      |

---

## About

**ファイル:** [components/About.tsx](../components/About.tsx)

### 概要

創業者プロフィールと会社概要の2カラムセクション。`id="about"`。
右端に縦書き装飾「あわいに立ち、形に変える」（`lg:` 以上）。

### 左カラム: プロフィール

- `next/image` のポートレート（`max-w-[240px]`, `aspect-[4/5]`）
- グレースケール表示、ホバーでカラー＋わずかに拡大
- Founder & Designer 小田 滉太（Kota Oda）＋紹介文

### 右カラム: 会社概要（`<dl>`）

| 項目     | 値                                                     |
| -------- | ------------------------------------------------------ |
| 社名     | 株式会社淡間（Awama Inc.）                             |
| 所在地   | 東京都渋谷区                                           |
| 事業内容 | UI/UXデザイン・プロダクト開発支援・デザインシステム構築 |

下部に「Name Origin」（社名の由来の要約）を朱色の左ボーダー付きで併記。

---

## Contact

**ファイル:** [components/Contact.tsx](../components/Contact.tsx)

### 概要

問い合わせ CTA セクション。背景 `bg-ink`。`id="contact"`。
背景に巨大アウトラインタイポ「CONTACT」（`.text-outline-light`）。

### CTAボタン

| ボタン              | リンク先             | スタイル                                        |
| ------------------- | -------------------- | ----------------------------------------------- |
| フォームで相談する  | Google Forms（外部） | `bg-background text-primary` ＋朱スイープホバー |
| X でつながる        | X.com（外部）        | `border border-background/30` ＋淡色スイープ    |

- どちらも `target="_blank" rel="noopener noreferrer"`
- X ボタンには `aria-label="X（旧Twitter）でフォローする"` を設定

---

## Footer

**ファイル:** [components/Footer.tsx](../components/Footer.tsx)

### レイアウト

```
[ 淡間  AWAMA INC. ]  ...  [ © 2026 Awama Inc. ]  ...  [ BACK TO TOP ↑ ]
```

- 背景 `bg-ink border-t border-white/10`（Contact と連続）
- コピーライト年は `new Date().getFullYear()` で自動更新
- 右端に「Back to top」リンク（`href="#"`）

---

## グローバルスタイル

**ファイル:** [app/globals.css](../app/globals.css)

### ベーススタイル

| 要素       | 設定                                                  |
| ---------- | ----------------------------------------------------- |
| `html`     | `scroll-behavior: smooth`                             |
| `body`     | `bg: #F5F2EA`, `color: #17171B`, `line-height: 1.9`  |
| `h1~h3`   | `Shippori Mincho`, `font-feature-settings: "palt"`, `letter-spacing: 0.04em` |
| `::selection` | 朱色背景（`#B33A1C`）× 生成り文字                  |

### 和紙テクスチャオーバーレイ

`body::before` で SVG ノイズフィルターを全画面に固定オーバーレイ（`opacity: 0.10`）。

### ユーティリティ

| クラス            | 用途                                                       |
| ----------------- | ---------------------------------------------------------- |
| `.text-vertical`  | 縦書き（`writing-mode: vertical-rl`）                      |
| `.ink-wash`       | 墨のにじみ風の淡いラジアルグラデーション背景               |
| `.gradation-band` | 生成り → 墨の水平グラデーション帯（Philosophy の象徴表現） |
| `.btn-sweep`      | 背景が左から塗り込まれるボタンホバー（`--sweep-color`）    |
| `.link-underline` | 下線が左から引かれるリンクホバー                           |
| `.text-outline` / `.text-outline-light` | 巨大アウトライン文字（背景装飾）     |
| `.animate-delay-100〜400` | アニメーション遅延（100ms 刻み）                   |

### `prefers-reduced-motion` 対応

全アニメーション・トランジションを実質無効化（0.01ms に短縮）。

---

## ページ構成

**ファイル:** [app/page.tsx](../app/page.tsx)

コンポーネントの配置順:

```
<main>
  <Header />     ← fixed（常時表示）
  <Hero />       ← min-h-screen（全画面ファーストビュー）
  <Marquee />    ← サービス名マーキー帯
  <Philosophy /> ← id="philosophy"（ダーク）
  <Strengths />  ← id="strengths"
  <Works />      ← id="works"（surface 背景）
  <About />      ← id="about"
  <Contact />    ← id="contact"（ダーク）
  <Footer />     ← ダーク（Contact と連続）
</main>
```

明 → 暗 → 明 → 暗のリズムで「あわい（グラデーション）」の往復を構成する。

### メタデータ（layout.tsx）

| フィールド    | 値                                              |
| ------------- | ----------------------------------------------- |
| `title`       | 株式会社淡間 \| UI/UXデザイン・プロダクト開発支援 |
| `description` | 思いと形の間に入り、本質から作る。...           |
| `lang`        | `ja`                                            |
