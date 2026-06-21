import { useFieldContext } from '../form/form-context'
import { RadioGroup } from '../radio-group'

import type { FieldRadioGroupProps } from './field.types'

export const FieldRadioGroup = ({ children, ...props }: FieldRadioGroupProps) => {
  const field = useFieldContext<string>()

  return (
    <RadioGroup
      name={field.name}
      onChange={(e) => {
        const target = e.target as HTMLInputElement
        if (target.type === 'radio') {
          field.handleChange(target.value)
        }
      }}
      value={field.state.value}
      {...props}
    >
      {children}
    </RadioGroup>
  )
}
