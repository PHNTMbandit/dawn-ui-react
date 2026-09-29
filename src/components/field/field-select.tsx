import { CaretUpDownIcon } from '@phosphor-icons/react'
import { useFieldContext } from '../form/form-contexts'
import { Select, SelectIcon, SelectList, SelectPopup, SelectTrigger, SelectValue } from '../select'

import type { FieldSelectProps } from './field.types'

export const FieldSelect = ({ children, ...props }: FieldSelectProps) => {
  const field = useFieldContext()
  const fieldName = field.name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())

  return (
    <Select value={field.state.value} onValueChange={(value) => field.setValue(value)} {...props}>
      <SelectTrigger aria-label={fieldName}>
        <SelectValue placeholder={`Select ${fieldName.toLowerCase()}`} />
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
