import type { ReactNode } from 'react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

// セクション見出し
function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="border-t border-border pt-10 pb-6">
      <p className="text-xs tracking-[0.25em] text-accent uppercase mb-2">{label}</p>
      <h2 className="font-serif text-2xl font-semibold text-primary">{title}</h2>
    </div>
  )
}

// デモ行
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 py-3 border-b border-border/50 last:border-0">
      <p className="text-xs tracking-[0.15em] text-muted uppercase">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

export default function UiDemoPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 max-w-5xl mx-auto">
      <div className="mb-16">
        <p className="text-xs tracking-[0.25em] text-accent uppercase mb-3">Design System V2.0</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-primary mb-4">
          コンポーネント一覧
        </h1>
        <p className="text-sm text-secondary font-light">
          株式会社淡間のデザインシステムに基づくUIコンポーネントです。
        </p>
      </div>

      {/* ── BUTTON ── */}
      <SectionTitle label="01" title="Button" />

      <Row label="Variant">
        <Button variant="primary">お問い合わせ</Button>
        <Button variant="outline">詳細情報</Button>
        <Button variant="accent">利用規約</Button>
        <Button variant="ghost">もっと見る</Button>
      </Row>

      <Row label="With Arrow">
        <Button variant="primary" withArrow>お問い合わせ</Button>
        <Button variant="outline" withArrow>実績を見る</Button>
        <Button variant="accent" withArrow>利用規約</Button>
        <Button variant="ghost" withArrow>もっと見る</Button>
      </Row>

      <Row label="Size — sm">
        <Button variant="primary" size="sm">Primary</Button>
        <Button variant="outline" size="sm">Outline</Button>
        <Button variant="accent" size="sm">Accent</Button>
        <Button variant="ghost" size="sm">Ghost</Button>
      </Row>

      <Row label="Size — md (default)">
        <Button variant="primary" size="md">Primary</Button>
        <Button variant="outline" size="md">Outline</Button>
        <Button variant="accent" size="md">Accent</Button>
        <Button variant="ghost" size="md">Ghost</Button>
      </Row>

      <Row label="Size — lg">
        <Button variant="primary" size="lg">Primary</Button>
        <Button variant="outline" size="lg">Outline</Button>
        <Button variant="accent" size="lg">Accent</Button>
        <Button variant="ghost" size="lg">Ghost</Button>
      </Row>

      <Row label="Disabled">
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="accent" disabled>Accent</Button>
        <Button variant="ghost" disabled>Ghost</Button>
      </Row>

      {/* ── BADGE ── */}
      <SectionTitle label="02" title="Badge" />

      <Row label="Variant">
        <Badge variant="default">Default</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="muted">Muted</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="success">Success</Badge>
      </Row>

      <Row label="使用例">
        <Badge variant="accent">UI/UXデザイン</Badge>
        <Badge variant="accent">UXリサーチ・設計</Badge>
        <Badge variant="accent">デザインシステム</Badge>
        <Badge variant="default">SERVICES</Badge>
        <Badge variant="default">NEWS</Badge>
        <Badge variant="muted">Coming Soon</Badge>
      </Row>

      {/* ── CARD ── */}
      <SectionTitle label="03" title="Card" />

      <p className="text-sm text-secondary font-light mb-6">
        4種類のホバーアニメーション変種。<code className="text-xs bg-border px-1 py-0.5 rounded">hover</code> prop で切り替え。
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="group">
          <p className="text-xs tracking-[0.15em] text-muted uppercase mb-3">Default（シャドウ）</p>
          <Card
            hover="default"
            image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
            imageAlt="オフィスの風景"
            category="Services"
            title="ブランディング支援"
            description="企業の核心にあるブランドを整理し、一貫したビジュアルアイデンティティを確立します。"
            href="#"
          />
        </div>

        <div className="group">
          <p className="text-xs tracking-[0.15em] text-muted uppercase mb-3">Slide（スライドイン）</p>
          <Card
            hover="slide"
            image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
            imageAlt="オフィスの風景"
            category="News"
            title="2024年 春、新オフィスへ"
            description="東京都渋谷区に新たなクリエイティブスペースを開設しました。"
            href="#"
          />
        </div>

        <div className="group">
          <p className="text-xs tracking-[0.15em] text-muted uppercase mb-3">Scale（スケールアップ）</p>
          <Card
            hover="scale"
            image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
            imageAlt="オフィスの風景"
            category="Works"
            title="医療 SaaS のUI再設計"
            description="診療フロー全体を見直し、操作時間を 20% 短縮しました。"
            href="#"
          />
        </div>

        <div className="group">
          <p className="text-xs tracking-[0.15em] text-muted uppercase mb-3">Glow（ゴールドパルス）</p>
          <Card
            hover="glow"
            image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
            imageAlt="オフィスの風景"
            category="Insights"
            title="デザインシステム構築の知見"
            description="大規模プロジェクトで培ったトークン設計のベストプラクティスを公開。"
            href="#"
          />
        </div>
      </div>

      {/* ── CARD（画像なし） ── */}
      <p className="text-xs tracking-[0.15em] text-muted uppercase mt-12 mb-4">画像なし（テキストカード）</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card
          hover="default"
          category="Why first"
          title="まず、なぜから。"
          description="要件より先に目的を問い直すことで、作るべきものを正確に捉えます。"
          href="#"
          ctaLabel="詳しく見る"
        />
        <Card
          hover="default"
          category="Fast Delivery"
          title="最初の形を、早く。"
          description="プロトタイプを素早く作り、議論を具体化することで意思決定を加速します。"
          href="#"
          ctaLabel="詳しく見る"
        />
        <Card
          hover="default"
          category="Cross Insight"
          title="業界を越えた視点。"
          description="複数業界の経験から、固定観念にとらわれない提案を行います。"
          href="#"
          ctaLabel="詳しく見る"
        />
      </div>
    </main>
  )
}
