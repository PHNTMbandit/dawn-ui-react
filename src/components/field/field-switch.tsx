import { useFieldContext } from '../form/form-context'
import { Switch } from '../switch'

import type { FieldSwitchProps } from './field.types'

export const FieldSwitch = ({ ...props }: FieldSwitchProps) => {
  const field = useFieldContext<boolean>()

  return (
    <Switch
      checked={field.state.value}
      id={field.name}
      name={field.name}
      onCheckedChange={(checked) => field.handleChange(checked === true)}
      {...props}
    />
  )
}
