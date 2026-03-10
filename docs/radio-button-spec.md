# ラジオボタン コンポーネント仕様書

**Figma参照:** [外部共有ファイル - node-id: 16-1734](https://www.figma.com/design/JB2qaexqjvLMsLIXoCC27B/%E5%A4%96%E9%83%A8%E5%85%B1%E6%9C%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB?node-id=16-1734)
**作成日:** 2026-03-10
**対象プロジェクト:** コーポレートサイト

---

## 1. 概要

ラジオボタンは、複数の選択肢の中から**1つだけ**を選択させるフォームコンポーネントです。
同一グループ内では常に排他的選択となります。

---

## 2. バリアント一覧

| バリアント | 説明 |
|-----------|------|
| Default（未選択） | 初期状態。何も選択されていない |
| Selected（選択済み） | ユーザーが選択した状態 |
| Hover | マウスオーバー時 |
| Focus | キーボードフォーカス時 |
| Disabled（未選択） | 操作不可・未選択状態 |
| Disabled Selected | 操作不可・選択済み状態 |
| Error | バリデーションエラー時 |

---

## 3. 解剖（Anatomy）

```
[○] ラベルテキスト
 ↑
 コントロール（円形）
```

| 要素 | 役割 |
|------|------|
| コントロール（円形） | 選択状態を示すインジケーター |
| インナードット | Selected状態のみ表示される内側の円 |
| ラベル | 選択肢の説明テキスト |
| ヘルパーテキスト（任意） | 補足説明文 |
| エラーテキスト（任意） | エラー時の案内文 |

---

## 4. サイズ仕様

### コントロール（円形）

| サイズ | 外径 | ボーダー幅 | インナードット径 |
|--------|------|-----------|----------------|
| Small  | 16px | 1.5px     | 6px            |
| Medium（デフォルト） | 20px | 2px | 8px |
| Large  | 24px | 2px       | 10px           |

### 間隔

| 項目 | 値 |
|------|----|
| コントロール〜ラベル間隔 | 8px |
| ラジオボタン行間（グループ内） | 12px |
| グループ外余白（上下） | 16px |

---

## 5. カラー仕様

デザイントークンはプロジェクトの `tailwind.config.ts` に準拠します。

### コントロール（円形）

| 状態 | ボーダー色 | 背景色 | インナードット色 |
|------|-----------|--------|----------------|
| Default | `#E2E8F0` (border) | `#F8FAFC` (background) | — |
| Hover | `#64748B` (muted) | `#F8FAFC` (background) | — |
| Focus | `#0F172A` (primary) | `#F8FAFC` (background) | — |
| Selected | `#0F172A` (primary) | `#F8FAFC` (background) | `#0F172A` (primary) |
| Selected Hover | `#334155` (secondary) | `#F8FAFC` (background) | `#334155` (secondary) |
| Disabled | `#E2E8F0` (border) | `#F8FAFC` (background) | — |
| Disabled Selected | `#E2E8F0` (border) | `#F8FAFC` (background) | `#E2E8F0` (border) |
| Error | `#DC2626` | `#FEF2F2` | — |
| Error Selected | `#DC2626` | `#FEF2F2` | `#DC2626` |

### テキスト

| 状態 | ラベル色 | ヘルパーテキスト色 |
|------|---------|------------------|
| Default / Selected | `#020617` (foreground) | `#64748B` (muted) |
| Disabled | `#64748B` (muted) | `#64748B` (muted) |
| Error | `#020617` (foreground) | `#DC2626` |

---

## 6. タイポグラフィ

| 要素 | フォント | ウェイト | サイズ | 行高 |
|------|---------|---------|--------|------|
| ラベル（Medium） | Noto Sans JP | 400 | 14px (0.875rem) | 1.5 |
| ラベル（Large） | Noto Sans JP | 400 | 16px (1rem) | 1.75 |
| ヘルパー / エラーテキスト | Noto Sans JP | 400 | 12px (0.75rem) | 1.5 |

---

## 7. フォーカス仕様（アクセシビリティ）

- フォーカスリングは **コントロール外周 2px のオフセット**で表示
- フォーカスリング色: `#0F172A` (primary)、幅: 2px
- キーボード操作（Tab / 矢印キー）でグループ内を移動できること

```css
/* フォーカスリング例 */
outline: 2px solid #0F172A;
outline-offset: 2px;
```

---

## 8. インタラクション仕様

| トリガー | アクション |
|---------|-----------|
| クリック / タップ | 選択状態に切り替え（同グループの他選択を解除） |
| Space キー | フォーカス中の項目を選択 |
| 矢印キー（↑↓ / ←→） | グループ内の選択移動 |
| ホバー | Hoverスタイル適用（ポインターカーソルに変更） |

### トランジション

| プロパティ | 値 |
|-----------|-----|
| duration | 150ms |
| easing | ease-out |
| 対象 | border-color, background-color, opacity |

---

## 9. グループ構造

```html
<fieldset>
  <legend>グループラベル（必須）</legend>

  <label>
    <input type="radio" name="group-name" value="option1" />
    選択肢1
  </label>

  <label>
    <input type="radio" name="group-name" value="option2" />
    選択肢2
  </label>
</fieldset>
```

- `fieldset` + `legend` でグループをセマンティックにマークアップ
- `name` 属性は同グループ内で統一
- ラベルは `<label>` で必ずコントロールと関連付ける

---

## 10. アクセシビリティ要件

| 項目 | 要件 |
|------|------|
| WCAG 達成基準 | 2.1 AA 準拠 |
| コントラスト比（ラベル） | 4.5:1 以上 |
| コントラスト比（コントロールボーダー） | 3:1 以上 |
| フォーカス可視性 | 2.1.1 / 2.4.7 準拠 |
| スクリーンリーダー | 選択状態・グループ名を読み上げること |
| タッチターゲット | 最小 44×44px のタップ領域を確保 |
| Disabled | `aria-disabled="true"` または `disabled` 属性を付与 |
| エラー | `aria-describedby` でエラーテキストを紐付け |
| `role` | ネイティブ `<input type="radio">` を使用（role="radio" は不要） |

---

## 11. 使用禁止事項

- 1つのグループに選択肢を7個以上配置しない（チェックボックスへの置き換えを検討）
- 単体（1選択肢のみ）での使用不可
- 選択肢が2つの場合はトグルスイッチの使用も検討

---

## 12. Tailwind CSS 実装サンプル

```tsx
// RadioButton.tsx
type RadioButtonProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  helperText?: string;
  errorText?: string;
  onChange: (value: string) => void;
};

export function RadioButton({
  id,
  name,
  value,
  label,
  checked = false,
  disabled = false,
  helperText,
  errorText,
  onChange,
}: RadioButtonProps) {
  const hasError = Boolean(errorText);

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={[
          "flex items-center gap-2 cursor-pointer",
          disabled ? "cursor-not-allowed opacity-50" : "",
        ].join(" ")}
      >
        {/* ネイティブinput（視覚的に非表示） */}
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          aria-describedby={
            errorText ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          onChange={() => onChange(value)}
          className="sr-only"
        />

        {/* カスタムコントロール */}
        <span
          className={[
            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
            "transition-colors duration-150 ease-out",
            "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary",
            hasError
              ? checked
                ? "border-red-600 bg-red-50"
                : "border-red-600 bg-red-50"
              : checked
              ? "border-primary bg-background"
              : "border-border bg-background hover:border-muted",
          ].join(" ")}
          aria-hidden="true"
        >
          {checked && (
            <span
              className={[
                "w-2 h-2 rounded-full",
                hasError ? "bg-red-600" : "bg-primary",
              ].join(" ")}
            />
          )}
        </span>

        {/* ラベルテキスト */}
        <span className="text-sm font-sans text-foreground">{label}</span>
      </label>

      {/* ヘルパーテキスト */}
      {helperText && !errorText && (
        <p id={`${id}-helper`} className="text-xs font-sans text-muted ml-7">
          {helperText}
        </p>
      )}

      {/* エラーテキスト */}
      {errorText && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs font-sans text-red-600 ml-7"
        >
          {errorText}
        </p>
      )}
    </div>
  );
}
```

---

## 13. 改訂履歴

| バージョン | 日付 | 変更内容 | 担当 |
|-----------|------|---------|------|
| 1.0.0 | 2026-03-10 | 初版作成 | Claude |
