import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { accordionVariants, type AccordionProps } from './accordion.types'
import { cn } from '@/utils/cn'

export const Accordion = ({
  withSeparator = true,
  variant,
  className,
  children,
  ref,
  ...props
}: AccordionProps) => {
  return (
    <BaseAccordion.Root
      className={cn(
        accordionVariants({ variant, className }),
        withSeparator && 'divide-y divide-border',
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAccordion.Root>
  )
}
