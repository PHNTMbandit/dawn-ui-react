import { Select as BaseSelect } from '@base-ui/react/select'

import type { SelectProps } from './select.types'

export function Select({ ...props }: SelectProps) {
  return <BaseSelect.Root {...props} />
}
