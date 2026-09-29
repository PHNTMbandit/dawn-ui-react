import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'

import type { AutocompleteCollectionProps } from './autocomplete.types'

export const AutocompleteCollection = ({ children, ...props }: AutocompleteCollectionProps) => {
  return <BaseAutocomplete.Collection {...props}>{children}</BaseAutocomplete.Collection>
}
