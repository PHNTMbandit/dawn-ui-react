import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { type AccordionItemProps, accordionItemVariants } from './accordion.types'
import { cn } from '@/utils/cn'

export const AccordionItem = ({
  size,
  tone,
  className,
  children,
  ref,
  ...props
}: AccordionItemProps) => {
  return (
    <BaseAccordion.Item
      className={cn(accordionItemVariants({ className, tone, size }))}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAccordion.Item>
  )
}
