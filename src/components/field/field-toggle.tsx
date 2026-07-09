import { useFieldContext } from '../form/form-contexts'
import { Toggle } from '../toggle'

import type { FieldToggleProps } from './field.types'

export const FieldToggle = ({ children, ...props }: FieldToggleProps) => {
  const field = useFieldContext<boolean>()

  return (
    <Toggle
      id={field.name}
      name={field.name}
      onChange={(_e) => field.handleChange(!field.state.value)}
      pressed={field.state.value}
      {...props}
    >
      {children}
    </Toggle>
  )
}
