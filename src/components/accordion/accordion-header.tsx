import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { CaretDownIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { AccordionHeaderProps } from './accordion.types'

export const AccordionHeader = ({ className, children, ref, ...props }: AccordionHeaderProps) => {
  return (
    <BaseAccordion.Header className={cn('', className)} ref={ref} {...props}>
      <BaseAccordion.Trigger
        data-slot="accordion-trigger"
        className={cn('group flex w-full items-center justify-between hover:cursor-pointer')}
      >
        <div
          data-slot="accordion-content"
          className="grid auto-rows-min items-center has-data-[slot=accordion-icon]:grid-cols-[auto_1fr] has-data-[slot=accordion-subtitle]:grid-rows-[auto_auto] has-data-[slot=accordion-subtitle]:**:data-[slot=accordion-icon]:row-span-2"
        >
          {children}
        </div>
        <CaretDownIcon
          data-slot="accordion-down-icon"
          className="ml-auto shrink-0 text-on-surface-variant transition-transform duration-200 ease-out group-data-panel-open:rotate-180"
          weight="bold"
        />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  )
}
