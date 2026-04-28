import { useFieldContext } from '../form/form-context'
import { cn } from '@/utils/cn'

import type { FieldErrorProps } from './field.types'

export const FieldErrors = ({ className, children, ref, ...props }: FieldErrorProps) => {
  const field = useFieldContext()

  if (field.state.meta.errors.length === 0 && !children) {
    return null
  }

  return (
    <>
      {field.state.meta.errors.length > 0 && (
        <ul className={cn('space-y-3xs', className)} ref={ref} {...props}>
          {field.state.meta.errors.map((error) => (
            <li
              className="flex items-center gap-2xs style-text-strong--1 text-error-default"
              key={error.message}
            >
              {error.message}
            </li>
          ))}
          {children}
        </ul>
      )}
    </>
  )
}
