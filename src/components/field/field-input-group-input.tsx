import { useFieldContext } from '../form/form-contexts'
import { InputGroupInput } from '../input-group'
import { cn } from '@/utils/cn'

import type { FieldInputGroupInputProps } from './field.types'

export const FieldInputGroupInput = ({ className, ref, ...props }: FieldInputGroupInputProps) => {
  const field = useFieldContext<string>()
  const isInvalid =
    field.state.meta.isTouched && field.state.meta.errors.length > 0 && !field.state.meta.isValid

  return (
    <InputGroupInput
      aria-invalid={isInvalid}
      className={cn('', className)}
      id={field.name}
      name={field.name}
      onChange={(e) => field.handleChange(e.target.value)}
      ref={ref}
      value={field.state.value}
      {...props}
    />
  )
}
