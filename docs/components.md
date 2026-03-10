# コンポーネント仕様書

株式会社淡間 コーポレートサイト（Next.js + Tailwind CSS）のコンポーネント仕様書。

---

## 目次

1. [デザイントークン](#デザイントークン)
2. [Header](#header)
3. [Hero](#hero)
4. [Strengths](#strengths)
5. [Works](#works)
6. [About](#about)
7. [Contact](#contact)
8. [Footer](#footer)
9. [グローバルスタイル](#グローバルスタイル)

---

## デザイントークン

`tailwind.config.ts` で定義されたカスタムトークン。

### カラー

| トークン名    | 値          | 用途                               |
| ------------ | ----------- | ---------------------------------- |
| `primary`    | `#0F172A`   | メインテキスト・背景（ダーク）     |
| `secondary`  | `#334155`   | サブテキスト                       |
| `accent`     | `#CA8A04`   | アクセント（ラベル・バッジ）       |
| `background` | `#F8F7F4`   | ページ背景色（和紙調オフホワイト） |
| `foreground` | `#020617`   | 最も濃いテキスト                   |
| `muted`      | `#64748B`   | 補助テキスト・ラベル               |
| `border`     | `#E2E8F0`   | ボーダー・区切り線                 |

### フォント

| トークン名 | フォントファミリー                | 用途                           |
| --------- | -------------------------------- | ------------------------------ |
| `serif`   | Noto Serif JP, serif             | 見出し（h1/h2/h3）・ロゴ       |
| `sans`    | Noto Sans JP, sans-serif         | 本文・ラベル・ナビゲーション   |

### アニメーション

| 名前           | 定義                                              |
| -------------- | ------------------------------------------------- |
| `fade-in`      | `opacity: 0 → 1`（0.8s ease-out）                |
| `fade-in-up`   | `opacity: 0, translateY(24px) → 1, 0`（0.8s）    |

---

## Header

**ファイル:** [components/Header.tsx](../components/Header.tsx)

### 概要

画面上部に固定されるナビゲーションバー。ロゴと各セクションへのアンカーリンクを持つ。

### 表示仕様

- `position: fixed`、画面上部から `top-4` の位置に配置
- `z-index: 50` で最前面表示
- 左右・上部に余白（`left-4 right-4`）を設けてフローティング表示
- `max-w-5xl` でコンテンツ幅を制限、中央寄せ

### レイアウト

```
[ ロゴ（淡間） ]  ............  [ 強み | 実績 | About | お問い合わせ ]
```

- ロゴは左、ナビリンクは右
- ナビリンクは `sm:` 以上で表示（モバイルでは非表示）

### スタイル

| 要素         | スタイル                                                      |
| ------------ | ------------------------------------------------------------- |
| nav 背景     | `bg-background/90` + `backdrop-blur-sm`（半透明ブラー）       |
| ボーダー     | `border border-border`                                        |
| ロゴ         | `font-serif`, `text-base`, `font-semibold`, `tracking-wide`  |
| ナビリンク   | `text-xs`, `tracking-[0.15em]`, `text-secondary`             |
| ホバー       | ロゴ: `opacity-70` / リンク: `text-primary`（duration-200）  |
| フォーカス   | `focus:ring-2 focus:ring-primary`（アクセシビリティ対応）    |

### ナビゲーション項目

| ラベル       | href         |
| ------------ | ------------ |
| 強み         | `#strengths` |
| 実績         | `#works`     |
| About        | `#about`     |
| お問い合わせ | `#contact`   |

### Props

なし（静的コンポーネント）

---

## Hero

**ファイル:** [components/Hero.tsx](../components/Hero.tsx)

### 概要

トップページのファーストビューを占める全画面セクション。キャッチコピー・2つのCTAボタン・スクロールインジケーター・パーティクルアニメーションで構成。

### 表示仕様

- `min-height: 100vh` で画面全体を占有
- 格子線パターン（`.hero-grid`）を背景に持つ
- Canvasでパーティクルを描画

### レイアウト

```
┌─────────────────────────────────────┐
│  [パーティクルCanvas（背景）]       │
│                                     │
│         Awama Inc.                  │
│    あわい、から始める。             │
│    思いと形の間に入り、本質から作る。│
│                                     │
│  [ お問い合わせ ]  [ 実績を見る ]   │
│                                     │
│            ↓ scroll                 │
└─────────────────────────────────────┘
```

### アニメーション

#### フェードイン（IntersectionObserver）

- 初期状態: `opacity-0 translate-y-6`
- セクションが `threshold: 0.1` で viewport に入ると `opacity-100` に遷移
- `transition-all duration-1000 ease-out`

#### パーティクル（Canvas）

- 25個のパーティクルをランダム配置
- `vx`, `vy`: ±0.125 の速度でランダムに漂う
- 半径: 0.4〜1.6px、不透明度: 0.12〜0.27
- 画面端に達すると反対側から再出現（トーラス型ループ）
- `prefers-reduced-motion: reduce` が設定されている場合は描画しない
- Canvasサイズは親要素の `ResizeObserver` で自動追従

### CTAボタン

| ボタン             | href       | スタイル                                    |
| ------------------ | ---------- | ------------------------------------------- |
| お問い合わせ       | `#contact` | `bg-primary text-background`（塗りつぶし）  |
| 実績を見る         | `#works`   | `border border-primary text-primary`（枠線）|

- ホバー時: お問い合わせは `bg-secondary`、実績を見るは `bg-primary text-background` に反転

### スクロールインジケーター

- テキスト "scroll" + 縦の線（高さ `h-12`、`animate-pulse`）
- セクション下部中央に `position: absolute` で配置

### Props

なし（静的コンポーネント）

---

## Strengths

**ファイル:** [components/Strengths.tsx](../components/Strengths.tsx)

### 概要

サービスの強みを3カラムカードで表示するセクション。`id="strengths"` でアンカーリンク対応。

### レイアウト

```
Strengths
選ばれる3つの理由

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Why first    │ │ Fast Delivery│ │ Cross Insight│
│ まず、なぜから│ │ 最初の形を、 │ │ 業界を越えた │
│              │ │ 早く。       │ │ 視点。       │
│ 説明テキスト │ │ 説明テキスト │ │ 説明テキスト │
└──────────────┘ └──────────────┘ └──────────────┘
```

- モバイル: 1カラム / `md:` 以上: 3カラム（`grid-cols-3 gap-8 md:gap-12`）

### データ構造

```ts
type StrengthItem = {
  label: string;       // 英語ラベル（例: "Why first"）
  title: string;       // 日本語見出し
  description: string; // 説明文
};
```

| label           | title              |
| --------------- | ------------------ |
| Why first       | まず、なぜから。   |
| Fast Delivery   | 最初の形を、早く。 |
| Cross Insight   | 業界を越えた視点。 |

### サブコンポーネント: `StrengthCard`

#### Props

| 名前    | 型                    | 説明                   |
| ------- | --------------------- | ---------------------- |
| `item`  | `StrengthItem`        | 表示するデータ         |
| `index` | `number`              | アニメーションの遅延用 |

#### アニメーション

- IntersectionObserver（`threshold: 0.15`）で `opacity-0 translate-y-8` → `opacity-100 translate-y-0`
- `index * 150ms` のstagger遅延（カード順に段階表示）
- `transition-all duration-700 ease-out`

#### スタイル

| 要素   | スタイル                                              |
| ------ | ----------------------------------------------------- |
| 外枠   | `border-t border-border pt-10 pb-4`（上ボーダーのみ） |
| ラベル | `text-xs tracking-[0.25em] text-accent uppercase`     |
| 見出し | `text-xl sm:text-2xl font-serif font-semibold`        |
| 本文   | `text-sm sm:text-base text-secondary font-light`      |

---

## Works

**ファイル:** [components/Works.tsx](../components/Works.tsx)

### 概要

支援実績を3カラムカードで表示するセクション。`id="works"` でアンカーリンク対応。背景は `bg-white`。

### レイアウト

```
Works
支援実績

┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│ [UI/UXデザイン]│ │[UXリサーチ・] │ │[デザインシス] │
│  医療 × SaaS  │ │  HR × スタ... │ │  EC × D2C    │
│               │ │               │ │               │
│ 課題タイトル  │ │ 課題タイトル  │ │ 課題タイトル  │
│ ─────────     │ │ ─────────     │ │ ─────────     │
│ 解決策テキスト│ │ 解決策テキスト│ │ 解決策テキスト│
└───────────────┘ └───────────────┘ └───────────────┘
```

- モバイル: 1カラム / `md:` 以上: 3カラム（`grid-cols-3 gap-6`）

### データ構造

```ts
type WorkItem = {
  industry: string;  // 業界（例: "医療 × SaaS"）
  challenge: string; // 課題
  solution: string;  // 解決策・成果
  tag: string;       // タグラベル
};
```

| tag                 | industry          | 主な成果                     |
| ------------------- | ----------------- | ---------------------------- |
| UI/UXデザイン       | 医療 × SaaS       | 診療時間 20% 短縮            |
| UXリサーチ・設計    | HR × スタートアップ| エントリー完了率 1.8倍       |
| デザインシステム    | EC × D2C          | 開発工数 40% 削減            |

### サブコンポーネント: `WorkCard`

#### Props

| 名前    | 型          | 説明                   |
| ------- | ----------- | ---------------------- |
| `item`  | `WorkItem`  | 表示するデータ         |
| `index` | `number`    | アニメーションの遅延用 |

#### アニメーション

- Strengths と同様の IntersectionObserver（`threshold: 0.1`）+ `index * 150ms` stagger

#### スタイル

| 要素       | スタイル                                                    |
| ---------- | ----------------------------------------------------------- |
| カード外枠 | `bg-white border border-border p-8 sm:p-10`                 |
| ホバー     | `hover:shadow-sm`                                           |
| タグ       | `border border-accent text-accent text-xs tracking-widest` |
| 業界ラベル | `text-xs tracking-[0.2em] text-muted uppercase`            |
| 課題見出し | `text-base sm:text-lg font-serif font-semibold`            |
| 区切り線   | `w-8 h-px bg-border`（細い水平線）                          |
| 解決策     | `text-sm text-secondary font-light`                        |

---

## About

**ファイル:** [components/About.tsx](../components/About.tsx)

### 概要

創業者プロフィールと社名の由来を2カラムで紹介するセクション。`id="about"` でアンカーリンク対応。

### レイアウト

```
About
私たちについて

┌──────────────────────┐  │  ┌──────────────────────┐
│ [プロフィール画像]   │  │  │ Name Origin          │
│ Founder & Designer   │  │  │「淡間」の由来        │
│ 小田 滉太           │  │  │                      │
│ Kota Oda            │  │  │ 説明文...            │
│                      │  │  │                      │
│ 説明文...           │  │  │ ─────────────────    │
└──────────────────────┘  │  │ 所在地: 東京都渋谷区 │
                           │  └──────────────────────┘
       左カラム           │         右カラム
```

- モバイル: 1カラム / `md:` 以上: 2カラム（`grid-cols-2 gap-16`）
- 右カラムは `border-l border-border pl-12`（左ボーダー区切り）

### プロフィール画像

- `next/image` の `<Image>` コンポーネントを使用
- サイズ: `w-24 h-24`（96×96px）
- `className="object-cover grayscale"` でグレースケール表示
- 現在は Unsplash の仮画像を使用

### アニメーション

- IntersectionObserver（`threshold: 0.1`）でセクション全体がフェードイン
- `opacity-0 translate-y-6` → `opacity-100`（duration-700）

### Props

なし（静的コンポーネント）

---

## Contact

**ファイル:** [components/Contact.tsx](../components/Contact.tsx)

### 概要

問い合わせCTAセクション。背景 `bg-primary`（ネイビー）で他セクションと差別化。`id="contact"` でアンカーリンク対応。

### レイアウト

```
┌────────────────────────────────────────┐  ← bg-primary（ネイビー）
│              Contact                   │
│    まずはお気軽にご連絡ください。      │
│    説明文...                           │
│                                        │
│  [ フォームで相談する ]  [ X でつながる ]│
└────────────────────────────────────────┘
```

- `max-w-2xl` で中央寄せ、テキストは `text-center`

### CTAボタン

| ボタン              | リンク先               | スタイル                                            |
| ------------------- | ---------------------- | --------------------------------------------------- |
| フォームで相談する  | Google Forms（外部）   | `bg-background text-primary`（白塗りつぶし）        |
| X でつながる        | X.com（外部）          | `border border-background/30 text-background`（枠線）|

- どちらも `target="_blank" rel="noopener noreferrer"` で安全な外部リンク
- X ボタンは SVG アイコン付き（`aria-hidden="true"`）
- X ボタンには `aria-label="X（旧Twitter）でフォローする"` を設定

### カラー（背景が primary のため反転）

| 要素           | 値                      |
| -------------- | ----------------------- |
| ラベルテキスト | `text-accent`           |
| 見出し         | `text-background`       |
| 本文           | `text-background/60`    |

### アニメーション

- IntersectionObserver（`threshold: 0.1`）でフェードイン
- `opacity-0 translate-y-6` → `opacity-100`（duration-700）

### Props

なし（静的コンポーネント）

---

## Footer

**ファイル:** [components/Footer.tsx](../components/Footer.tsx)

### 概要

シンプルなフッター。Contact セクションと同じ `bg-primary` 背景で連続感を持たせる。

### レイアウト

```
[ 株式会社淡間 ]  ........  [ © 2025 Awama Inc. All rights reserved. ]
```

- モバイル: 縦積み（`flex-col`）/ `sm:` 以上: 横並び（`flex-row`）
- 左: 社名ロゴ / 右: コピーライト

### スタイル

| 要素         | スタイル                                        |
| ------------ | ----------------------------------------------- |
| 背景         | `bg-primary border-t border-white/10`           |
| 社名         | `font-serif text-sm text-background/60`         |
| コピーライト | `text-xs text-background/40 font-light`         |

### 動的コンテンツ

- コピーライト年: `new Date().getFullYear()` で自動更新

### Props

なし（静的コンポーネント）

---

## グローバルスタイル

**ファイル:** [app/globals.css](../app/globals.css)

### ベーススタイル

| 要素       | 設定                                                  |
| ---------- | ----------------------------------------------------- |
| `html`     | `scroll-behavior: smooth`（スムーズスクロール）       |
| `body`     | `bg-background`, `color: foreground`, `line-height: 1.75` |
| `h1~h3`   | `font-family: Noto Serif JP`, `font-feature-settings: "palt"`, `letter-spacing: 0.05em` |

### 和紙テクスチャオーバーレイ

`body::before` でSVGノイズフィルターを全画面に固定オーバーレイ。

- `position: fixed; inset: 0; z-index: 9999`
- `pointer-events: none`（インタラクション阻害なし）
- SVG `feTurbulence`（`fractalNoise`, `baseFrequency: 0.75`, `numOctaves: 4`）+ `feColorMatrix`（グレースケール）
- `opacity: 0.12` で控えめな質感

### セクション区切り線

```css
section + section {
  border-top: 1px solid rgba(26, 26, 26, 0.1);
}
```

隣接セクション間に細い区切り線を自動付与。

### `.hero-grid` ユーティリティ

Hero セクション背景の格子線パターン。

```css
background-image:
  linear-gradient(rgba(26, 26, 26, 0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(26, 26, 26, 0.04) 1px, transparent 1px);
background-size: 60px 60px;
```

### アニメーション遅延ユーティリティ

`.animate-delay-100` 〜 `.animate-delay-400`（100ms 刻み）

### `prefers-reduced-motion` 対応

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

全アニメーション・トランジションを実質無効化。Hero のパーティクルも個別に `matchMedia` でチェック済み。

---

## ページ構成

**ファイル:** [app/page.tsx](../app/page.tsx)

コンポーネントの配置順:

```
<main>
  <Header />    ← fixed（常時表示）
  <Hero />      ← min-h-screen（全画面ファーストビュー）
  <Strengths /> ← id="strengths"
  <Works />     ← id="works"
  <About />     ← id="about"
  <Contact />   ← id="contact"
  <Footer />
</main>
```

### メタデータ（layout.tsx）

| フィールド    | 値                                              |
| ------------- | ----------------------------------------------- |
| `title`       | 株式会社淡間 \| UI/UXデザイン・プロダクト開発支援 |
| `description` | 思いと形の間に入り、本質から作る。...           |
| `lang`        | `ja`                                            |
