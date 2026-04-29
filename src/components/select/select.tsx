import { Select as BaseSelect } from '@base-ui/react/select'

import type { SelectProps } from './select.types'

export const Select = ({ children, ...props }: SelectProps) => {
  return <BaseSelect.Root {...props}>{children}</BaseSelect.Root>
}
