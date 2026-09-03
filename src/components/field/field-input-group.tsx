import { useFieldContext } from '../form/form-contexts'
import { InputGroup } from '../input-group'
import { cn } from '@/utils/cn'

import type { FieldInputGroupProps } from './field.types'

export const FieldInputGroup = ({ className, children, ref, ...props }: FieldInputGroupProps) => {
  const field = useFieldContext<string>()
  const isInvalid =
    field.state.meta.isTouched && field.state.meta.errors.length > 0 && !field.state.meta.isValid

  return (
    <InputGroup
      aria-invalid={isInvalid}
      className={cn('', className)}
      id={field.name}
      ref={ref}
      {...props}
    >
      {children}
    </InputGroup>
  )
}
