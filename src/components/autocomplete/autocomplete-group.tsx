import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'
import { cn } from '@/utils/cn'

import type { AutocompleteGroupProps } from './autocomplete.types'

export const AutocompleteGroup = ({
  className,
  children,
  ref,
  ...props
}: AutocompleteGroupProps) => {
  return (
    <BaseAutocomplete.Group className={cn('block space-y-3xs', className)} ref={ref} {...props}>
      {children}
    </BaseAutocomplete.Group>
  )
}
