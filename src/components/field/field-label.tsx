import { useFieldContext } from '../form/form-contexts'
import { fieldLabelVariants, type FieldLabelProps } from './field.types'
import { cn } from '@/utils/cn'

export const FieldLabel = ({
  size,
  variant,
  showRequired = false,
  className,
  children,
  ref,
  ...props
}: FieldLabelProps) => {
  const field = useFieldContext()
  const fieldName = field.name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
  const isInvalid = field.state.meta.errors.length > 0

  return (
    <div
      className={cn(
        fieldLabelVariants({ size, variant }),
        className,
        isInvalid && 'text-error-default',
      )}
      ref={ref}
      {...props}
    >
      {children ? children : fieldName}
      {showRequired && <span className="ml-3xs text-error-default">*</span>}
    </div>
  )
}
