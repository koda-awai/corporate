import { ButtonHTMLAttributes, forwardRef } from 'react'

export type ButtonVariant = 'primary' | 'outline' | 'accent' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  withArrow?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-background hover:bg-secondary active:bg-foreground',
  outline:
    'border border-primary text-primary hover:bg-primary hover:text-background active:bg-secondary active:text-background',
  accent:
    'bg-accent text-background hover:bg-accent/85 active:bg-accent/70',
  ghost:
    'text-primary hover:bg-primary/5 active:bg-primary/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs tracking-[0.12em] px-4 py-2 gap-1.5',
  md: 'text-sm tracking-[0.15em] px-6 py-3 gap-2',
  lg: 'text-base tracking-[0.15em] px-8 py-4 gap-2.5',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      withArrow = false,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={[
          'inline-flex items-center justify-center font-sans font-medium',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantClasses[variant],
          sizeClasses[size],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
        {withArrow && (
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
