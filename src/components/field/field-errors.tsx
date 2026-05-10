import { useFieldContext } from '../form/form-context'
import { cn } from '@/utils/cn'

import type { FieldErrorProps } from './field.types'

export const FieldErrors = ({ className, children, ref, ...props }: FieldErrorProps) => {
  const field = useFieldContext()

  if (field.state.meta.errors.length === 0 && !children) {
    return null
  }

  const extractMessage = (error: unknown): string | null => {
    if (typeof error === 'string') {
      return error
    }
    if (
      error &&
      typeof error === 'object' &&
      'message' in error &&
      typeof (error as any).message === 'string'
    ) {
      return (error as any).message
    }
    return null
  }

  const messages = field.state.meta.errors
    .map(extractMessage)
    .filter((msg): msg is string => msg !== null)

  if (messages.length === 0 && !children) {
    return null
  }

  return (
    <ul className={cn('space-y-3xs', className)} ref={ref} {...props}>
      {messages.map((message) => (
        <li
          className="flex items-center gap-2xs style-text-strong--1 text-error-default"
          key={message}
        >
          {message}
        </li>
      ))}
      {children}
    </ul>
  )
}
