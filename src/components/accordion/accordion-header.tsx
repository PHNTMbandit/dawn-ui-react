import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { cn } from '@/utils/cn'

import type { AccordionHeaderProps } from './accordion.types'

export const AccordionHeader = ({ className, children, ref, ...props }: AccordionHeaderProps) => {
  return (
    <BaseAccordion.Header
      data-header
      className={cn(
        'w-full items-center justify-start gap-sm rounded-lg text-start style-text-strong-1 transition-all',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAccordion.Header>
  )
}
