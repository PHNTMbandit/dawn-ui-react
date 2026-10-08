import { CaretUpDownIcon } from '@phosphor-icons/react'

import { useFieldContext } from '../form/form-contexts'
import { Select, SelectIcon, SelectList, SelectPopup, SelectTrigger, SelectValue } from '../select'
import type { FieldSelectProps } from './field.types'

export function FieldSelect({ children, ...props }: FieldSelectProps) {
  const field = useFieldContext()

  return (
    <Select value={field.state.value} onValueChange={(value) => field.setValue(value)} {...props}>
      <SelectTrigger aria-label={field.name}>
        <SelectValue />
        <SelectIcon>
          <CaretUpDownIcon weight="bold" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false} sideOffset={8}>
        <SelectList>{children}</SelectList>
      </SelectPopup>
    </Select>
  )
}
