import { useFieldContext } from '../form/form-contexts'
import { Radio } from '../radio-group'

import type { FieldRadioProps } from './field.types'

export const FieldRadio = ({ children, ...props }: FieldRadioProps) => {
  const field = useFieldContext<string>()

  return (
    <Radio
      {...props}
      onChange={(e) => field.handleChange((e.target as HTMLInputElement).value)}
      value={field.state.value}
    >
      {children}
    </Radio>
  )
}
