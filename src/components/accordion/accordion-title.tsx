import { cn } from '@/utils/cn'

import type { AccordionTitleProps } from './accordion.types'

export const AccordionTitle = ({ className, children, ref, ...props }: AccordionTitleProps) => {
  return (
    <div
      data-title
      className={cn('style-text-strong-0 transition-colors', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
