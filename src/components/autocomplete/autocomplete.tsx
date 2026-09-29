import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'

import type { AutocompleteProps } from './autocomplete.types'

export const Autocomplete = ({ children, ...props }: AutocompleteProps) => {
  return <BaseAutocomplete.Root {...props}>{children}</BaseAutocomplete.Root>
}
