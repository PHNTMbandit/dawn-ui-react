import { useFieldContext } from '../form/form-contexts'
import { Input } from '../input'
import { cn } from '@/utils/cn'

import type { FieldInputProps } from './field.types'

export const FieldInput = ({ className, children, ref, ...props }: FieldInputProps) => {
  const field = useFieldContext<string>()
  const isInvalid =
    field.state.meta.isTouched && field.state.meta.errors.length > 0 && !field.state.meta.isValid

  return (
    <Input
      aria-invalid={isInvalid}
      className={cn('', className)}
      id={field.name}
      name={field.name}
      onChange={(e) => field.handleChange(e.target.value)}
      ref={ref}
      value={field.state.value}
      {...props}
    >
      {children}
    </Input>
  )
}
