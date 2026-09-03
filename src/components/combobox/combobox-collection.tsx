import { Combobox as BaseCombobox } from '@base-ui/react/combobox'

import type { ComboboxCollectionProps } from './combobox.types'

export const ComboboxCollection = ({ children, ...props }: ComboboxCollectionProps) => {
  return <BaseCombobox.Collection {...props}>{children}</BaseCombobox.Collection>
}
