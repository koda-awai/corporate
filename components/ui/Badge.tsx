import { HTMLAttributes } from 'react'

export type BadgeVariant = 'default' | 'accent' | 'muted' | 'outline' | 'error' | 'success'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-primary text-background',
  accent:  'bg-accent text-background',
  muted:   'bg-border text-muted',
  outline: 'border border-primary text-primary',
  error:   'bg-red-50 text-red-600 border border-red-200',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
}

export default function Badge({
  variant = 'default',
  className = '',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center',
        'px-2.5 py-0.5',
        'text-xs font-sans font-medium tracking-[0.15em] uppercase',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}
