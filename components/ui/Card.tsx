'use client'

import { HTMLAttributes } from 'react'
import Image from 'next/image'
import Badge from './Badge'

export type CardHover = 'default' | 'slide' | 'scale' | 'glow'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** ホバーアニメーション種別 */
  hover?: CardHover
  /** 背景・サムネイル画像 URL */
  image?: string
  /** 画像の alt テキスト */
  imageAlt?: string
  /** カテゴリバッジラベル */
  category?: string
  /** カード見出し */
  title?: string
  /** 補足テキスト */
  description?: string
  /** CTA リンク先 */
  href?: string
  /** CTA ラベル（デフォルト: "詳細を見る"） */
  ctaLabel?: string
}

// ホバー変種ごとの追加クラス
const hoverClasses: Record<CardHover, string> = {
  default: 'hover:shadow-md',
  slide:   'hover:shadow-md',     // 内部オーバーレイで制御
  scale:   'hover:scale-[1.02]',
  glow:    'hover:shadow-[0_0_32px_rgba(202,138,4,0.18)]',
}

export default function Card({
  hover = 'default',
  image,
  imageAlt = '',
  category,
  title,
  description,
  href,
  ctaLabel = '詳細を見る',
  className = '',
  children,
  ...props
}: CardProps) {
  const base = [
    'relative overflow-hidden bg-white border border-border',
    'transition-all duration-300 ease-out',
    hoverClasses[hover],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={base} {...props}>
      {/* ── 画像エリア ── */}
      {image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-border">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={[
              'object-cover',
              hover === 'scale' ? 'transition-transform duration-500 group-hover:scale-105' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          />

          {/* slide: 下から滑り込むオーバーレイ */}
          {hover === 'slide' && (
            <div className="absolute inset-0 bg-primary/70 flex items-end p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              {title && (
                <p className="text-background font-serif text-lg leading-snug">{title}</p>
              )}
            </div>
          )}

          {/* glow: ゴールドグロー枠 */}
          {hover === 'glow' && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-accent pointer-events-none" />
          )}
        </div>
      )}

      {/* ── コンテンツエリア ── */}
      <div className="p-6 flex flex-col gap-3">
        {category && <Badge variant="accent">{category}</Badge>}

        {title && (
          <h3 className="font-serif text-base sm:text-lg font-semibold text-primary leading-snug">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-sm text-secondary font-light leading-relaxed">{description}</p>
        )}

        {children}

        {href && (
          <a
            href={href}
            className="inline-flex items-center gap-1.5 mt-2 text-xs tracking-[0.12em] text-primary font-medium hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  )
}
