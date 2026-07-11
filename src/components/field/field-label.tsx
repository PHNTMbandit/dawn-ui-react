import { useFieldContext } from '../form/form-contexts'
import { cn } from '@/utils/cn'

import type { FieldLabelProps } from './field.types'

export const FieldLabel = ({ className, children, ref, ...props }: FieldLabelProps) => {
  const field = useFieldContext()
  const fieldName = field.name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
  const isInvalid = field.state.meta.errors.length > 0

  return (
    <div
      className={cn('style-text-default-0', className, isInvalid && 'text-error-default')}
      ref={ref}
      {...props}
    >
      {children ? children : fieldName}
    </div>
  )
}
