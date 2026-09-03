import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'
import { cn } from '@/utils/cn'

import type { AutocompleteContentProps } from './autocomplete.types'

export const AutocompleteContent = ({
  emptyText,
  className,
  children,
  ref,
  ...props
}: AutocompleteContentProps) => {
  return (
    <BaseAutocomplete.Portal>
      <BaseAutocomplete.Positioner
        className={cn('', className)}
        ref={ref}
        {...props}
        sideOffset={16}
      >
        <BaseAutocomplete.Popup
          className={
            'max-h-[22.5rem] w-[calc(var(--anchor-width)+var(--spacing-md))] max-w-[calc(var(--available-width))] overflow-hidden rounded-xl bg-surface-2 shadow-md'
          }
        >
          <BaseAutocomplete.Empty
            className={
              'ml-3xs p-sm style-text-prose--1 text-on-surface-variant empty:m-[0px] empty:p-[0px]'
            }
          >
            {emptyText}
          </BaseAutocomplete.Empty>
          <BaseAutocomplete.List
            className={
              'max-h-[min(22.5rem,var(--available-height))] scroll-pt-[2.25rem] scroll-pb-[0.5rem] overflow-y-auto overscroll-contain data-empty:p-[0px]'
            }
          >
            {children}
          </BaseAutocomplete.List>
        </BaseAutocomplete.Popup>
      </BaseAutocomplete.Positioner>
    </BaseAutocomplete.Portal>
  )
}
