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
      data-slot="accordion-subtitle"
      className={cn('text-left transition-colors', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
