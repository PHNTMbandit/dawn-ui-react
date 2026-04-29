import { useFieldContext } from '../form/form-context'
import { RadioGroup } from '../radio-group'

import type { FieldRadioGroupProps } from './field.types'

export const FieldRadioGroup = ({ children, ...props }: FieldRadioGroupProps) => {
  const field = useFieldContext<string>()

  return (
    <RadioGroup
      name={field.name}
      onChange={(e) => field.handleChange((e.target as HTMLInputElement).value)}
      value={field.state.value}
      {...props}
    >
      {children}
    </RadioGroup>
  )
}
