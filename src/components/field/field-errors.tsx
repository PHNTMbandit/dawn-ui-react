import { useFieldContext } from '../form/form-contexts'
import { cn } from '@/utils/cn'

import type { FieldErrorProps } from './field.types'

export const FieldErrors = ({ className, children, ref, ...props }: FieldErrorProps) => {
  const field = useFieldContext()
  const errors = field.state.meta.errors

  if ((!errors || errors.length === 0) && !children) {
    return null
  }

  const messages: string[] = []

  const extractMessages = (error: unknown): void => {
    if (typeof error === 'string') {
      messages.push(error)
    } else if (Array.isArray(error)) {
      error.forEach(extractMessages)
    } else if (error && typeof error === 'object') {
      if ('issues' in error && Array.isArray((error as any).issues)) {
        ;(error as any).issues.forEach((issue: any) => {
          if (typeof issue?.message === 'string') {
            messages.push(issue.message)
          }
        })
      } else if ('message' in error && typeof (error as any).message === 'string') {
        messages.push((error as any).message)
      } else {
        Object.values(error).forEach(extractMessages)
      }
    }
  }

  errors?.forEach(extractMessages)

  if (messages.length === 0 && !children) {
    return null
  }

  return (
    <ul className={cn('space-y-3xs', className)} ref={ref} {...props}>
      {messages.map((message, index) => (
        <li
          className="flex items-center gap-2xs style-text-strong--1 text-error-default"
          key={`${message}-${index}`}
        >
          {message}
        </li>
      ))}
      {children}
    </ul>
  )
}
