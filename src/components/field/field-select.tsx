import { CaretUpDownIcon } from '@phosphor-icons/react'
import { useFieldContext } from '../form/form-context'
import { Select, SelectIcon, SelectList, SelectPopup, SelectTrigger, SelectValue } from '../select'

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
      <SelectTrigger>
        <SelectValue />
        <SelectIcon>
          <CaretUpDownIcon weight="bold" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPopup>
        <SelectList>{children}</SelectList>
      </SelectPopup>
    </Select>
  )
}
