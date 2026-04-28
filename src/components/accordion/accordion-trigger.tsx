import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { CaretDownIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { AccordionTriggerProps } from './accordion.types'

export const AccordionTrigger = ({ className, children, ref, ...props }: AccordionTriggerProps) => {
  return (
    <BaseAccordion.Trigger
      data-trigger
      className={cn(
        'group flex h-2xl w-full items-center justify-between gap-sm pr-sm pl-md hover:cursor-pointer [&>svg]:size-md',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <CaretDownIcon
        className="ml-auto size-sm! shrink-0 text-on-surface-variant transition-transform duration-200 ease-out group-data-panel-open:rotate-180"
        weight="bold"
      />
    </BaseAccordion.Trigger>
  )
}
