import { cn } from '@/utils/cn'

import type { AccordionSubtitleProps } from './accordion.types'

export const AccordionSubtitle = ({
  className,
  children,
  ref,
  ...props
}: AccordionSubtitleProps) => {
  return (
    <div
      data-subtitle
      className={cn('style-text-prose--1 transition-colors', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
