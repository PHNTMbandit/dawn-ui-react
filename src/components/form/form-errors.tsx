import { XCircleIcon } from '@phosphor-icons/react'
import { Alert, AlertDescription } from '../alert'
import { AlertContent } from '../alert/alert-content'
import { useFormContext } from './form-contexts'
import { cn } from '@/utils/cn'

import type { FormErrorsProps } from './form.types'

const collectMessages = (value: unknown, acc: Set<string>) => {
  if (value == null) return
  if (typeof value === 'string') {
    if (value.trim()) acc.add(value)
    return
  }
  if (Array.isArray(value)) {
    value.forEach((v) => collectMessages(v, acc))
    return
  }
  if (typeof value === 'object') {
    const message = (value as { message?: unknown }).message
    if (typeof message === 'string') {
      acc.add(message)
      return
    }
    Object.values(value as Record<string, unknown>).forEach((v) => collectMessages(v, acc))
  }
}

export const FormErrors = ({ className, children, ref, ...props }: FormErrorsProps) => {
  const form = useFormContext()

  return (
    <form.Subscribe selector={(state) => [state.errors, state.fieldMeta]}>
      {([errors, fieldMeta]) => {
        const messages = new Set<string>()
        collectMessages(errors, messages)
        Object.values(fieldMeta as Record<string, { errors?: unknown }>).forEach((meta) =>
          collectMessages(meta.errors, messages),
        )

        if (messages.size === 0) return null

        return (
          <Alert className={cn('', className)} ref={ref} tone="error" {...props}>
            <XCircleIcon weight="duotone" />
            <AlertContent>
              {children}
              <AlertDescription>
                <ul>
                  {[...messages].map((message) => (
                    <li key={message}>{message}</li>
                  ))}
                </ul>
              </AlertDescription>
            </AlertContent>
          </Alert>
        )
      }}
    </form.Subscribe>
  )
}
