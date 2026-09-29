import { cn } from '@/utils/cn'

import type { BentoBoxFooterProps } from './bento-box.types'

export const BentoBoxFooter = ({ className, children, ref, ...props }: BentoBoxFooterProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between not-first:group-data-[size=large]/box:gap-lg not-first:group-data-[size=medium]/box:gap-md group-data-[size=small]/box:gap-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
