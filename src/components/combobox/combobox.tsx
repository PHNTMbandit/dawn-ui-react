import { Combobox as BaseCombobox } from '@base-ui/react/combobox'

import type { ComboboxProps } from './combobox.types'

export const Combobox = ({ children, ...props }: ComboboxProps) => {
  return <BaseCombobox.Root {...props}>{children}</BaseCombobox.Root>
}
