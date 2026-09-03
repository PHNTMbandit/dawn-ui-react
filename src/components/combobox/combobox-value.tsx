import { Combobox as BaseCombobox } from '@base-ui/react/combobox'

import type { ComboboxValueProps } from './combobox.types'

export const ComboboxValue = ({ children, ...props }: ComboboxValueProps) => {
  return <BaseCombobox.Value {...props}>{children}</BaseCombobox.Value>
}
