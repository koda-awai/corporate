# Radio Button コンポーネント仕様書

Figma ファイル: 外部共有ファイル
対象ノード: `Radio / Assets`（8:573）, `Radio`（8:598）, `Radio Group`（8:626）

---

## 目次

1. [コンポーネント構成](#コンポーネント構成)
2. [Radio / Assets](#radio--assets)
3. [Radio](#radio)
4. [Radio Group](#radio-group)
5. [カラートークン早見表](#カラートークン早見表)
6. [アクセシビリティ](#アクセシビリティ)

---

## コンポーネント構成

```plaintext
Radio Group          ← フォーム全体（ラベル + ラジオ群 + エラーメッセージ）
  └─ Radio Unit      ← ラジオ1項目 + 展開パネル（Note）
       └─ Radio      ← アイコン + ラベルテキスト
            └─ Radio / Assets  ← アイコン本体（円）
```

---

## Radio / Assets

> アイコン単体のコンポーネント。ラベルなし。

### サイズ

| 要素         | サイズ     |
| ------------ | ---------- |
| コンテナ     | 24 × 24 px |
| 外円（枠）   | 20 × 20 px |
| 内円（選択時）| 10 × 10 px |

### バリアント

| プロパティ | 値                                         |
| ---------- | ------------------------------------------ |
| `Variant`  | `Unchecked` / `Checked`                    |
| `State`    | `Default` / `Hover` / `Focused` / `Disabled` / `Error` |

### 状態別スタイル

#### Unchecked

| State     | 外円 fill    | 外円 stroke         | フォーカスリング         |
| --------- | ------------ | ------------------- | ------------------------ |
| Default   | `#ffffff`    | `#b8c3c8` 1.5px     | —                        |
| Hover     | `#ffffff`    | `#9aa8af` 1.5px     | —                        |
| Focused   | `#ffffff`    | `#b8c3c8` 1.0px     | `#78e1e8` 1.5px（外側）  |
| Disabled  | `#f9fafb`    | `#d4dbde` 1.5px     | —                        |
| Error     | `#ffffff`    | `#e54e4e` 1.5px     | —                        |

#### Checked

| State     | 外円 fill    | 外円 stroke         | 内円 fill    | フォーカスリング         |
| --------- | ------------ | ------------------- | ------------ | ------------------------ |
| Default   | `#ffffff`    | `#1ca2b0` 1.5px     | `#1ca2b0`    | —                        |
| Hover     | `#ffffff`    | `#1d7081` 1.5px     | `#1d7081`    | —                        |
| Focused   | `#ffffff`    | `#1ca2b0` 1.5px     | `#1ca2b0`    | `#78e1e8` 1.0px（外側）  |
| Disabled  | `#f9fafb`    | `#afeef2` 1.5px     | `#afeef2`    | —                        |

> **Note:** Checked/Error バリアントは本ファイルのアセット定義外。

### レイアウト図

```plaintext
┌──────────────────────┐  24px
│  ┌────────────────┐  │
│  │    ○（20px）   │  │
│  │  ●（10px,Chk）│  │
│  └────────────────┘  │
└──────────────────────┘
     ↑ Focused 時: 外側に #78e1e8 のリング
```

---

## Radio

> アイコン + ラベルテキストの単体コンポーネント。

### サイズ

| 要素     | サイズ       |
| -------- | ------------ |
| 全体     | 128 × 24 px  |
| アイコン | 24 × 24 px   |
| ラベル   | 100 × 21 px  |

### レイアウト

```plaintext
[ Radio / Assets 24px ]  gap:4px  [ ラベルテキスト ]
←────────────── 128px ─────────────────────────────→
```

- `layout: HORIZONTAL`
- `align-items: CENTER`
- `gap: 4px`

### バリアント

| プロパティ | 値                                                      |
| ---------- | ------------------------------------------------------- |
| `Variant`  | `Unchecked` / `Checked`                                 |
| `State`    | `Default` / `Hover` / `Focused` / `Disabled` / `Error` |

### ラベルテキスト スタイル

| プロパティ      | 値                        |
| --------------- | ------------------------- |
| フォント        | Noto Sans JP              |
| ウェイト        | 400（Regular）            |
| サイズ          | 14px                      |
| 行高            | 21px（×1.5）              |
| レタースペーシング | 0.28px                 |

### 状態別テキストカラー

| State    | テキストカラー |
| -------- | -------------- |
| Default  | `#30373b`      |
| Hover    | `#30373b`      |
| Focused  | `#30373b`      |
| Disabled | `#d4dbde`      |
| Error    | `#e54e4e`      |

---

## Radio Group

> フォームとして使用する際のグループコンポーネント。ラベル・ラジオ群・エラーメッセージをまとめて管理する。

### バリアント

| プロパティ        | 値                       |
| ----------------- | ------------------------ |
| `Variant`         | `Vertical` / `Horizontal` |
| `Error message`   | `true` / `false`         |

### レイアウト

#### Vertical

```plaintext
[ ラベル ]  [ 必須 ]    ここにサポートテキストが入ります
○ ラベルテキスト
○ ラベルテキスト
○ ラベルテキスト
○ ラベルテキスト
○ ラベルテキスト
※ エラーテキストが入ります  ← Error message=true の場合
```

- グループ全体: `VERTICAL` layout, `gap: 8px`（ラベル〜ラジオ間、ラジオ間）

#### Horizontal

```plaintext
[ ラベル ]  [ 必須 ]    ここにサポートテキストが入ります
○ ラベルテキスト  ○ ラベルテキスト  ○ ラベルテキスト  ○ ラベルテキスト  ○ ラベルテキスト
※ エラーテキストが入ります  ← Error message=true の場合
```

- ラジオ行: `HORIZONTAL` layout, `gap: 24px`（ラジオ間）

### フォームラベルエリア

| 要素             | スタイル                                              |
| ---------------- | ----------------------------------------------------- |
| ラベルテキスト   | Noto Sans JP 500, 14px, lh 14px, color `#30373b`     |
| サポートテキスト | Noto Sans JP 400, 11px, lh 16.5px, color `#9aa8af`  |
| 間隔             | ラベル〜サポートテキスト: `gap: 8px`                  |

### 必須バッジ

```plaintext
┌──────────────────┐
│  必須            │  ← bg:#fce4e4, radius:2px, padding:0 4px
└──────────────────┘
```

| プロパティ    | 値                |
| ------------- | ----------------- |
| 背景色        | `#fce4e4`         |
| テキスト      | "必須"            |
| テキストカラー| `#e54e4e`         |
| フォント      | Noto Sans JP 400, 11px, lh 16.5px |
| padding       | left 4px / right 4px |
| border-radius | 2px               |
| サイズ        | 30 × 17px         |

### エラーメッセージ

```plaintext
※ エラーテキストが入ります
```

| プロパティ    | 値                |
| ------------- | ----------------- |
| テキストカラー| `#e54e4e`         |
| フォント      | Noto Sans JP 400, 11px, lh 16.5px, ls 0 |
| `Error message` prop を `true` にすると表示 | |

### 展開パネル（Note）

選択されたラジオに紐づく入力フォームエリア（展開表示）。

```plaintext
┌────────────────────────────────────┐  ← bg:#ffffff, border:#e7ebed 1px, radius:8px
│  [ Label ]  [ 必須 ]               │
│  ┌──────────────────────────────┐  │
│  │  プレースホルダー            │  │  ← Input: border:#b8c3c8, radius:4px, padding:0 12px
│  └──────────────────────────────┘  │
│  ☐ ラベルテキスト                 │
└────────────────────────────────────┘
```

| プロパティ    | 値                           |
| ------------- | ---------------------------- |
| 背景色        | `#ffffff`                    |
| ボーダー      | `#e7ebed` 1px                |
| 角丸          | 8px                          |
| padding       | 16px（全辺）                 |
| 内部 gap      | 8px                          |
| layout        | VERTICAL                     |

---

## アクセシビリティ

### キーボード操作

| 操作              | 動作                                     |
| ----------------- | ---------------------------------------- |
| `Tab`             | ラジオグループにフォーカス移動           |
| `↑` / `←`        | グループ内で前の項目に移動・選択         |
| `↓` / `→`        | グループ内で次の項目に移動・選択         |
| `Space`           | フォーカス中の項目を選択                 |

### フォーカス表示

Focused 状態では外円の外側にフォーカスリング（`#78e1e8`）を表示する。視覚的に現在位置を明示すること。

| コンポーネント   | フォーカスリング色 | 太さ   |
| ---------------- | ------------------ | ------ |
| Unchecked/Focused | `#78e1e8`         | 1.5px  |
| Checked/Focused   | `#78e1e8`         | 1.0px  |

### 推奨マークアップ

```html
<!-- Radio Group 全体 -->
<fieldset>
  <legend>ラベル <span aria-label="必須">必須</span></legend>
  <p id="support-text">ここにサポートテキストが入ります</p>

  <!-- 各 Radio -->
  <label>
    <input
      type="radio"
      name="group-name"
      value="option1"
      aria-describedby="support-text"
    />
    ラベルテキスト
  </label>

  <!-- エラー時 -->
  <p role="alert" aria-live="polite">※ エラーテキストが入ります</p>
</fieldset>
```

### ARIA 対応チェックリスト

| 項目                                    | 対応方針                                        |
| --------------------------------------- | ----------------------------------------------- |
| グループのラベル付け                    | `<fieldset>` + `<legend>` を使用                |
| サポートテキストの紐付け                | `aria-describedby` でラジオに関連付け           |
| 必須フィールドの明示                    | `required` 属性 または `aria-required="true"`   |
| エラーメッセージの読み上げ              | `role="alert"` + `aria-live="polite"` を付与    |
| Disabled 状態の伝達                     | `disabled` 属性（スクリーンリーダーが自動読み上げ）|
| フォーカスリングの非抑制                | CSS で `outline: none` を設定しないこと         |

---

## カラートークン早見表

| 用途                    | カラー      | 状態                      |
| ----------------------- | ----------- | ------------------------- |
| 外円 stroke（未選択）   | `#b8c3c8`   | Default                   |
| 外円 stroke（未選択）   | `#9aa8af`   | Hover                     |
| 外円 stroke（選択済み） | `#1ca2b0`   | Default / Focused         |
| 外円 stroke（選択済み） | `#1d7081`   | Hover                     |
| 内円 fill（選択済み）   | `#1ca2b0`   | Default / Focused         |
| 内円 fill（選択済み）   | `#1d7081`   | Hover                     |
| フォーカスリング        | `#78e1e8`   | Focused                   |
| 外円 stroke（無効）     | `#d4dbde`   | Disabled（Unchecked）     |
| 外円 stroke（無効）     | `#afeef2`   | Disabled（Checked）       |
| 外円 fill（無効）       | `#f9fafb`   | Disabled                  |
| 外円 stroke（エラー）   | `#e54e4e`   | Error                     |
| ラベル（通常）          | `#30373b`   | Default / Hover / Focused |
| ラベル（無効）          | `#d4dbde`   | Disabled                  |
| ラベル（エラー）        | `#e54e4e`   | Error                     |
| 必須バッジ 背景         | `#fce4e4`   | —                         |
| 必須バッジ テキスト     | `#e54e4e`   | —                         |
| サポートテキスト        | `#9aa8af`   | —                         |
| エラーメッセージ        | `#e54e4e`   | —                         |
| Note パネル ボーダー    | `#e7ebed`   | —                         |
