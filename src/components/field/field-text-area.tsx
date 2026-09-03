import { useFieldContext } from '../form/form-contexts'
import { TextArea } from '../text-area'
import { cn } from '@/utils/cn'

import type { FieldTextAreaProps } from './field.types'

export const FieldTextArea = ({ className, ref, ...props }: FieldTextAreaProps) => {
  const field = useFieldContext<string>()
  const isInvalid =
    field.state.meta.isTouched && field.state.meta.errors.length > 0 && !field.state.meta.isValid

  return (
    <TextArea
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
