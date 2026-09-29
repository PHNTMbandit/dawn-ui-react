import { cn } from '@/utils/cn'

import type { MeterSubtitleProps } from './meter.types'

export const MeterSubtitle = ({ className, children, ref, ...props }: MeterSubtitleProps) => {
  return (
    <span
      className={cn(
        'text-left style-text-prose--2 whitespace-nowrap text-on-surface-variant',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  )
}
