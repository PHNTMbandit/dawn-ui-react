import { useFieldContext } from '../form/form-context'
import { Select } from '../select'

import type { FieldSelectProps } from './field.types'

export const FieldSelect = ({ children, ...props }: FieldSelectProps) => {
  const field = useFieldContext()

  return (
    <Select
      defaultValue={field.state.value}
      value={field.state.value}
      onValueChange={(value) => field.setValue(value)}
      {...props}
    >
      {children}
    </Select>
  )
}
